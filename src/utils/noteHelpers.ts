/**
 * Note filtering and organization utilities
 * Works with the category system to filter and organize notes
 */

import type { CollectionEntry } from 'astro:content';
import { generateCategoryData, generateThemeData, getAllCategories } from './categories';

export type NoteEntry = CollectionEntry<'notes'>;

/**
 * Filter notes by category
 * @param notes - Array of note entries
 * @param categorySlug - Category slug to filter by
 * @returns Filtered array of notes
 */
export function filterNotesByCategory(notes: NoteEntry[], categorySlug: string): NoteEntry[] {
  return notes.filter(note => note.data.category === categorySlug);
}

/**
 * Filter notes by theme
 * @param notes - Array of note entries
 * @param themeSlug - Theme slug to filter by
 * @returns Filtered array of notes
 */
export function filterNotesByTheme(notes: NoteEntry[], themeSlug: string): NoteEntry[] {
  return notes.filter(note => 
    note.data.themes?.includes(themeSlug) || 
    note.data.tags?.includes(themeSlug)
  );
}

/**
 * Filter notes by multiple criteria
 * @param notes - Array of note entries
 * @param filters - Filter criteria
 * @returns Filtered array of notes
 */
export function filterNotes(notes: NoteEntry[], filters: {
  category?: string;
  themes?: string[];
  tags?: string[];
  searchTerm?: string;
}): NoteEntry[] {
  let filteredNotes = [...notes];

  // Filter by category
  if (filters.category) {
    filteredNotes = filteredNotes.filter(note => note.data.category === filters.category);
  }

  // Filter by themes
  if (filters.themes && filters.themes.length > 0) {
    filteredNotes = filteredNotes.filter(note => 
      note.data.themes?.some(theme => filters.themes!.includes(theme)) ||
      note.data.tags?.some(tag => filters.themes!.includes(tag))
    );
  }

  // Filter by tags
  if (filters.tags && filters.tags.length > 0) {
    filteredNotes = filteredNotes.filter(note => 
      note.data.tags?.some(tag => filters.tags!.includes(tag))
    );
  }

  // Search in title, description, and content
  if (filters.searchTerm) {
    const searchLower = filters.searchTerm.toLowerCase();
    filteredNotes = filteredNotes.filter(note => 
      note.data.title.toLowerCase().includes(searchLower) ||
      note.data.description.toLowerCase().includes(searchLower) ||
      (note.body && note.body.toLowerCase().includes(searchLower))
    );
  }

  return filteredNotes;
}

/**
 * Group notes by category
 * @param notes - Array of note entries
 * @returns Object with category slugs as keys and note arrays as values
 */
export function groupNotesByCategory(notes: NoteEntry[]): Record<string, NoteEntry[]> {
  const grouped: Record<string, NoteEntry[]> = {};
  
  // Initialize with all categories
  getAllCategories().forEach(category => {
    grouped[category.slug] = [];
  });
  
  // Add uncategorized notes
  grouped['uncategorized'] = [];
  
  // Group notes
  notes.forEach(note => {
    const category = note.data.category || 'uncategorized';
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(note);
  });
  
  return grouped;
}

/**
 * Get category statistics for notes
 * @param notes - Array of note entries
 * @returns Object with category counts and theme counts
 */
export function getNoteStatistics(notes: NoteEntry[]): {
  categoryCounts: Record<string, number>;
  themeCounts: Record<string, number>;
  totalNotes: number;
} {
  const categoryCounts: Record<string, number> = {};
  const themeCounts: Record<string, number> = {};
  
  notes.forEach(note => {
    // Count categories
    const category = note.data.category || 'uncategorized';
    categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    
    // Count themes
    const themes = note.data.themes || [];
    themes.forEach(theme => {
      themeCounts[theme] = (themeCounts[theme] || 0) + 1;
    });
    
    // Count legacy tags as themes too
    const tags = note.data.tags || [];
    tags.forEach(tag => {
      themeCounts[tag] = (themeCounts[tag] || 0) + 1;
    });
  });
  
  return {
    categoryCounts,
    themeCounts,
    totalNotes: notes.length
  };
}

/**
 * Sort notes by various criteria
 * @param notes - Array of note entries
 * @param sortBy - Sort criteria
 * @param order - Sort order
 * @returns Sorted array of notes
 */
export function sortNotes(
  notes: NoteEntry[], 
  sortBy: 'date' | 'title' | 'category' | 'readingTime' = 'date',
  order: 'asc' | 'desc' = 'desc'
): NoteEntry[] {
  const sorted = [...notes].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'date':
        comparison = a.data.pubDate.getTime() - b.data.pubDate.getTime();
        break;
      case 'title':
        comparison = a.data.title.localeCompare(b.data.title);
        break;
      case 'category':
        const categoryA = a.data.category || 'zzz'; // Put uncategorized last
        const categoryB = b.data.category || 'zzz';
        comparison = categoryA.localeCompare(categoryB);
        break;
      case 'readingTime':
        const timeA = a.data.readingTime || 0;
        const timeB = b.data.readingTime || 0;
        comparison = timeA - timeB;
        break;
    }
    
    return order === 'asc' ? comparison : -comparison;
  });
  
  return sorted;
}

/**
 * Get related notes based on shared categories or themes
 * @param currentNote - The current note
 * @param allNotes - All available notes
 * @param maxResults - Maximum number of related notes to return
 * @returns Array of related notes
 */
export function getRelatedNotes(
  currentNote: NoteEntry, 
  allNotes: NoteEntry[], 
  maxResults: number = 3
): NoteEntry[] {
  const related: { note: NoteEntry; score: number }[] = [];
  
  allNotes.forEach(note => {
    if (note.id === currentNote.id) return; // Skip current note
    
    let score = 0;
    
    // Same category gets high score
    if (note.data.category === currentNote.data.category) {
      score += 10;
    }
    
    // Shared themes get medium score
    const currentThemes = currentNote.data.themes || [];
    const noteThemes = note.data.themes || [];
    const sharedThemes = currentThemes.filter(theme => noteThemes.includes(theme));
    score += sharedThemes.length * 5;
    
    // Shared tags get low score
    const currentTags = currentNote.data.tags || [];
    const noteTags = note.data.tags || [];
    const sharedTags = currentTags.filter(tag => noteTags.includes(tag));
    score += sharedTags.length * 2;
    
    if (score > 0) {
      related.push({ note, score });
    }
  });
  
  // Sort by score and return top results
  return related
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(item => item.note);
}

/**
 * Get notes for a specific category with metadata
 * @param notes - Array of note entries
 * @param categorySlug - Category slug
 * @returns Object with category data and notes
 */
export function getNotesForCategory(notes: NoteEntry[], categorySlug: string): {
  category: ReturnType<typeof generateCategoryData>;
  notes: NoteEntry[];
  count: number;
} {
  const category = generateCategoryData(categorySlug);
  const categoryNotes = filterNotesByCategory(notes, categorySlug);
  
  return {
    category,
    notes: categoryNotes,
    count: categoryNotes.length
  };
}

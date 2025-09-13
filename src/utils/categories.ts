/**
 * Category management utilities for field notes
 * Handles the 8 main life categories with their themes and subcategories
 */

export interface CategoryData {
  slug: string;
  displayName: string;
  description: string;
  themes: string[];
  color: string;
  icon?: string;
}

export interface CategoryTheme {
  slug: string;
  displayName: string;
  description: string;
}

// Main category definitions
export const CATEGORIES: Record<string, CategoryData> = {
  self: {
    slug: 'self',
    displayName: 'On Self',
    description: 'Personal identity, ego, growth, discipline, and mental health',
    themes: ['identity', 'ego', 'growth', 'discipline', 'mental-health'],
    color: '#3B82F6', // Blue
    icon: '🧠'
  },
  love: {
    slug: 'love',
    displayName: 'On Love',
    description: 'Intimacy, respect, friendship, heartbreak, and reverence',
    themes: ['intimacy', 'respect', 'friendship', 'heartbreak', 'reverence'],
    color: '#EF4444', // Red
    icon: '❤️'
  },
  family: {
    slug: 'family',
    displayName: 'On Family',
    description: 'Parenting, step-parenting, ancestry, and legacy',
    themes: ['parenting', 'step-parenting', 'ancestry', 'legacy'],
    color: '#10B981', // Green
    icon: '👨‍👩‍👧‍👦'
  },
  work: {
    slug: 'work',
    displayName: 'On Work',
    description: 'Craft, money, purpose, systems, and failure',
    themes: ['craft', 'money', 'purpose', 'systems', 'failure'],
    color: '#F59E0B', // Amber
    icon: '💼'
  },
  body: {
    slug: 'body',
    displayName: 'On Body',
    description: 'Strength, health, endurance, and decay',
    themes: ['strength', 'health', 'endurance', 'decay'],
    color: '#8B5CF6', // Purple
    icon: '💪'
  },
  mind: {
    slug: 'mind',
    displayName: 'On Mind',
    description: 'Intellect, learning, perception, and contradiction',
    themes: ['intellect', 'learning', 'perception', 'contradiction'],
    color: '#06B6D4', // Cyan
    icon: '🧠'
  },
  society: {
    slug: 'society',
    displayName: 'On Society',
    description: 'Politics, culture, collective delusions, and power',
    themes: ['politics', 'culture', 'collective-delusions', 'power'],
    color: '#84CC16', // Lime
    icon: '🌍'
  },
  spirit: {
    slug: 'spirit',
    displayName: 'On Spirit',
    description: 'Meaning, death, faith, and awe',
    themes: ['meaning', 'death', 'faith', 'awe'],
    color: '#EC4899', // Pink
    icon: '✨'
  }
};

// Theme definitions with more detailed information
export const THEMES: Record<string, CategoryTheme> = {
  // On Self themes
  'identity': { slug: 'identity', displayName: 'Identity', description: 'Understanding who you are and your place in the world' },
  'ego': { slug: 'ego', displayName: 'Ego', description: 'The self-image and how it shapes your experiences' },
  'growth': { slug: 'growth', displayName: 'Growth', description: 'Personal development and self-improvement' },
  'discipline': { slug: 'discipline', displayName: 'Discipline', description: 'Self-control and consistent practice' },
  'mental-health': { slug: 'mental-health', displayName: 'Mental Health', description: 'Psychological well-being and emotional balance' },

  // On Love themes
  'intimacy': { slug: 'intimacy', displayName: 'Intimacy', description: 'Deep emotional and physical connection' },
  'respect': { slug: 'respect', displayName: 'Respect', description: 'Honoring others and being honored' },
  'friendship': { slug: 'friendship', displayName: 'Friendship', description: 'Platonic bonds and companionship' },
  'heartbreak': { slug: 'heartbreak', displayName: 'Heartbreak', description: 'Loss and healing in relationships' },
  'reverence': { slug: 'reverence', displayName: 'Reverence', description: 'Deep respect and admiration' },

  // On Family themes
  'parenting': { slug: 'parenting', displayName: 'Parenting', description: 'Raising and nurturing children' },
  'step-parenting': { slug: 'step-parenting', displayName: 'Step-parenting', description: 'Navigating blended family dynamics' },
  'ancestry': { slug: 'ancestry', displayName: 'Ancestry', description: 'Family history and heritage' },
  'legacy': { slug: 'legacy', displayName: 'Legacy', description: 'What you leave behind for future generations' },

  // On Work themes
  'craft': { slug: 'craft', displayName: 'Craft', description: 'Skill development and mastery' },
  'money': { slug: 'money', displayName: 'Money', description: 'Financial aspects of work and life' },
  'purpose': { slug: 'purpose', displayName: 'Purpose', description: 'Finding meaning in your work' },
  'systems': { slug: 'systems', displayName: 'Systems', description: 'Organizational structures and processes' },
  'failure': { slug: 'failure', displayName: 'Failure', description: 'Learning from setbacks and mistakes' },

  // On Body themes
  'strength': { slug: 'strength', displayName: 'Strength', description: 'Physical and mental fortitude' },
  'health': { slug: 'health', displayName: 'Health', description: 'Physical well-being and vitality' },
  'endurance': { slug: 'endurance', displayName: 'Endurance', description: 'Sustained effort and resilience' },
  'decay': { slug: 'decay', displayName: 'Decay', description: 'Aging and the natural decline of the body' },

  // On Mind themes
  'intellect': { slug: 'intellect', displayName: 'Intellect', description: 'Cognitive abilities and reasoning' },
  'learning': { slug: 'learning', displayName: 'Learning', description: 'Acquiring knowledge and skills' },
  'perception': { slug: 'perception', displayName: 'Perception', description: 'How we interpret and understand the world' },
  'contradiction': { slug: 'contradiction', displayName: 'Contradiction', description: 'Dealing with conflicting ideas and beliefs' },

  // On Society themes
  'politics': { slug: 'politics', displayName: 'Politics', description: 'Power structures and governance' },
  'culture': { slug: 'culture', displayName: 'Culture', description: 'Shared beliefs, values, and practices' },
  'collective-delusions': { slug: 'collective-delusions', displayName: 'Collective Delusions', description: 'Widely held but false beliefs' },
  'power': { slug: 'power', displayName: 'Power', description: 'Influence and control in social contexts' },

  // On Spirit themes
  'meaning': { slug: 'meaning', displayName: 'Meaning', description: 'Purpose and significance in life' },
  'death': { slug: 'death', displayName: 'Death', description: 'Mortality and the end of life' },
  'faith': { slug: 'faith', displayName: 'Faith', description: 'Belief and trust in something greater' },
  'awe': { slug: 'awe', displayName: 'Awe', description: 'Wonder and reverence for the sublime' }
};

/**
 * Generate category data from a slug
 * @param categorySlug - The category slug (e.g., 'self', 'love')
 * @returns CategoryData object or null if not found
 */
export function generateCategoryData(categorySlug: string): CategoryData | null {
  const normalizedSlug = categorySlug.toLowerCase().trim();
  return CATEGORIES[normalizedSlug] || null;
}

/**
 * Generate theme data from a slug
 * @param themeSlug - The theme slug (e.g., 'identity', 'mental-health')
 * @returns CategoryTheme object or null if not found
 */
export function generateThemeData(themeSlug: string): CategoryTheme | null {
  const normalizedSlug = themeSlug.toLowerCase().trim();
  return THEMES[normalizedSlug] || null;
}

/**
 * Get all available categories
 * @returns Array of all category data
 */
export function getAllCategories(): CategoryData[] {
  return Object.values(CATEGORIES);
}

/**
 * Get all available themes
 * @returns Array of all theme data
 */
export function getAllThemes(): CategoryTheme[] {
  return Object.values(THEMES);
}

/**
 * Get themes for a specific category
 * @param categorySlug - The category slug
 * @returns Array of theme data for the category
 */
export function getThemesForCategory(categorySlug: string): CategoryTheme[] {
  const category = generateCategoryData(categorySlug);
  if (!category) return [];
  
  return category.themes
    .map(themeSlug => generateThemeData(themeSlug))
    .filter((theme): theme is CategoryTheme => theme !== null);
}

/**
 * Validate if a category slug exists
 * @param categorySlug - The category slug to validate
 * @returns boolean indicating if the category exists
 */
export function isValidCategory(categorySlug: string): boolean {
  return generateCategoryData(categorySlug) !== null;
}

/**
 * Validate if a theme slug exists
 * @param themeSlug - The theme slug to validate
 * @returns boolean indicating if the theme exists
 */
export function isValidTheme(themeSlug: string): boolean {
  return generateThemeData(themeSlug) !== null;
}

/**
 * Get category display name from slug
 * @param categorySlug - The category slug
 * @returns Display name (e.g., 'On Self') or the original slug if not found
 */
export function getCategoryDisplayName(categorySlug: string): string {
  const category = generateCategoryData(categorySlug);
  return category?.displayName || categorySlug;
}

/**
 * Get theme display name from slug
 * @param themeSlug - The theme slug
 * @returns Display name (e.g., 'Identity') or the original slug if not found
 */
export function getThemeDisplayName(themeSlug: string): string {
  const theme = generateThemeData(themeSlug);
  return theme?.displayName || themeSlug;
}

/**
 * Format category and theme for display
 * @param categorySlug - The category slug
 * @param themeSlugs - Array of theme slugs (optional)
 * @returns Formatted string like "On Self: Identity, Growth"
 */
export function formatCategoryWithThemes(categorySlug: string, themeSlugs?: string[]): string {
  const category = generateCategoryData(categorySlug);
  if (!category) return categorySlug;
  
  if (!themeSlugs || themeSlugs.length === 0) {
    return category.displayName;
  }
  
  const themeNames = themeSlugs
    .map(themeSlug => getThemeDisplayName(themeSlug))
    .filter((name, index) => name !== themeSlugs[index]); // Remove invalid themes
  
  if (themeNames.length === 0) {
    return category.displayName;
  }
  
  return `${category.displayName}: ${themeNames.join(', ')}`;
}

/**
 * Get category color for styling
 * @param categorySlug - The category slug
 * @returns Color hex code or default color
 */
export function getCategoryColor(categorySlug: string): string {
  const category = generateCategoryData(categorySlug);
  return category?.color || '#6B7280'; // Default gray
}

/**
 * Get category icon
 * @param categorySlug - The category slug
 * @returns Icon emoji or default icon
 */
export function getCategoryIcon(categorySlug: string): string {
  const category = generateCategoryData(categorySlug);
  return category?.icon || '📝';
}

/**
 * Search categories and themes by keyword
 * @param keyword - Search keyword
 * @returns Array of matching categories and themes
 */
export function searchCategoriesAndThemes(keyword: string): {
  categories: CategoryData[];
  themes: CategoryTheme[];
} {
  const normalizedKeyword = keyword.toLowerCase().trim();
  
  const matchingCategories = getAllCategories().filter(category =>
    category.slug.includes(normalizedKeyword) ||
    category.displayName.toLowerCase().includes(normalizedKeyword) ||
    category.description.toLowerCase().includes(normalizedKeyword)
  );
  
  const matchingThemes = getAllThemes().filter(theme =>
    theme.slug.includes(normalizedKeyword) ||
    theme.displayName.toLowerCase().includes(normalizedKeyword) ||
    theme.description.toLowerCase().includes(normalizedKeyword)
  );
  
  return {
    categories: matchingCategories,
    themes: matchingThemes
  };
}

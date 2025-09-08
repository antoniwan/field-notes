# Note Grid Components

This document describes the NoteGrid and NoteCard components designed for the Field Notes blog. These components provide a flexible, reusable system for displaying notes throughout the site.

## Components Overview

### NoteCard Component

A flexible card component for displaying individual notes with multiple variants and configurations.

**Location:** `src/components/NoteCard.astro`

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Note title (required) |
| `description` | `string` | - | Note description (required) |
| `pubDate` | `Date` | - | Publication date (required) |
| `slug` | `string` | - | Note slug for linking (required) |
| `heroImage` | `ImageMetadata` | - | Hero image (optional) |
| `updatedDate` | `Date` | - | Last updated date (optional) |
| `showImage` | `boolean` | `true` | Whether to show the hero image |
| `variant` | `'default' \| 'compact' \| 'featured'` | `'default'` | Card display variant |
| `className` | `string` | `''` | Additional CSS classes |

#### Variants

- **default**: Standard card with image, title, description, and date
- **compact**: Horizontal layout optimized for lists and sidebars
- **featured**: Larger card that spans multiple grid columns

#### Usage Examples

```astro
<!-- Basic usage -->
<NoteCard
	title="My Note Title"
	description="This is a sample note description"
	pubDate={new Date()}
	slug="my-note"
	heroImage={imageData}
/>

<!-- Compact variant -->
<NoteCard
	title="Compact Note"
	description="Short description"
	pubDate={new Date()}
	slug="compact-note"
	variant="compact"
/>

<!-- Featured variant -->
<NoteCard
	title="Featured Note"
	description="This note gets special treatment"
	pubDate={new Date()}
	slug="featured-note"
	heroImage={imageData}
	variant="featured"
/>
```

### NoteGrid Component

A flexible grid component for displaying collections of notes with various layout options.

**Location:** `src/components/NoteGrid.astro`

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `notes` | `CollectionEntry<'notes'>[]` | - | Array of note entries (required) |
| `title` | `string` | - | Grid title (optional) |
| `description` | `string` | - | Grid description (optional) |
| `showTitle` | `boolean` | `false` | Whether to display the title |
| `showDescription` | `boolean` | `false` | Whether to display the description |
| `columns` | `1 \| 2 \| 3 \| 4` | `3` | Number of columns for the grid |
| `variant` | `'default' \| 'masonry' \| 'featured-first'` | `'default'` | Grid layout variant |
| `maxItems` | `number` | - | Maximum number of items to display |
| `className` | `string` | `''` | Additional CSS classes |
| `emptyMessage` | `string` | `'No notes found.'` | Message when no notes are available |

#### Variants

- **default**: Standard responsive grid layout
- **masonry**: Masonry-style layout with varying heights
- **featured-first**: First item spans multiple columns, rest in standard grid

#### Usage Examples

```astro
<!-- Basic grid -->
<NoteGrid 
	notes={allNotes}
	title="All Notes"
	description="Complete collection of field notes"
	showTitle={true}
	showDescription={true}
	columns={3}
/>

<!-- Featured first layout -->
<NoteGrid 
	notes={latestNotes}
	title="Latest Notes"
	showTitle={true}
	columns={3}
	variant="featured-first"
/>

<!-- Compact sidebar grid -->
<NoteGrid 
	notes={recentNotes}
	columns={1}
	className="sidebar-notes"
/>

<!-- Limited items -->
<NoteGrid 
	notes={allNotes}
	title="Recent Posts"
	showTitle={true}
	maxItems={6}
	columns={3}
/>
```

## Design Features

### Responsive Design
- Mobile-first approach with breakpoints at 640px, 768px, 1024px, and 1280px
- Automatic column adjustment based on screen size
- Optimized touch targets for mobile devices

### Accessibility
- Semantic HTML structure with proper ARIA labels
- Keyboard navigation support
- Focus management and visible focus indicators
- Screen reader friendly content structure
- High contrast mode support

### Performance
- Lazy loading for images
- CSS-only animations with reduced motion support
- Optimized image sizing based on variant
- Efficient CSS with minimal specificity

### Visual Design
- Consistent with the site's design system
- Smooth hover animations and transitions
- Professional typography hierarchy
- Subtle shadows and borders
- Color-coded date information

## CSS Custom Properties

The components use the following CSS custom properties from the global design system:

```css
/* Colors */
--color-primary
--color-secondary
--color-muted
--color-accent
--color-background
--color-background-subtle
--color-border
--color-border-light

/* Typography */
--font-sans
--font-serif
--font-mono
--text-xs through --text-5xl
--leading-tight through --leading-loose

/* Spacing */
--space-1 through --space-24

/* Layout */
--radius-sm through --radius-3xl
--shadow-sm through --shadow-lg
--transition-fast through --transition-slow
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid support required
- CSS Custom Properties support required
- Graceful degradation for older browsers

## Usage Throughout the Site

### Homepage
- Latest notes with featured-first layout
- 3-column responsive grid
- Shows 6 most recent notes

### Notes Index Page
- All notes in default grid layout
- 3-column responsive grid
- Complete collection display

### Category Pages (Future)
- Filtered notes by category
- Configurable column count
- Optional featured items

### Post Pages (Future)
- Related notes sidebar
- Similar content recommendations
- Compact card variants

### Search Results (Future)
- Search result display
- Highlighted matching terms
- Pagination support

## Customization

### Adding New Variants

To add a new card variant:

1. Add the variant to the `variant` prop type
2. Add CSS classes in the `cardClasses` object
3. Add variant-specific styles in the `<style>` section
4. Update the image sizing if needed

### Modifying Grid Layouts

To add a new grid variant:

1. Add the variant to the `variant` prop type
2. Add grid configuration in `getGridConfig()`
3. Add variant-specific CSS classes
4. Update responsive breakpoints as needed

### Styling Customization

All components use CSS custom properties, making it easy to customize:
- Colors can be changed via CSS custom properties
- Spacing can be adjusted via the spacing scale
- Typography can be modified via font variables
- Animations can be disabled via `prefers-reduced-motion`

## Examples

See `src/components/NoteGridExamples.astro` for comprehensive usage examples and patterns.

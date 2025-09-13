---
title: 'Example: Using the New Category System'
description: 'This note demonstrates how to use the new category and theme system in your field notes.'
pubDate: '2024-01-15'
heroImage: '../../assets/blog-placeholder-1.jpg'
category: 'self'
themes: ['identity', 'growth', 'mental-health']
tags: ['example', 'categories', 'themes']
---

# Example: Using the New Category System

This note demonstrates how to use the new category and theme system in your field notes.

## Available Categories

You can use any of these category slugs in your frontmatter:

- `self` → "On Self" (identity, ego, growth, discipline, mental health)
- `love` → "On Love" (intimacy, respect, friendship, heartbreak, reverence)
- `family` → "On Family" (parenting, step-parenting, ancestry, legacy)
- `work` → "On Work" (craft, money, purpose, systems, failure)
- `body` → "On Body" (strength, health, endurance, decay)
- `mind` → "On Mind" (intellect, learning, perception, contradiction)
- `society` → "On Society" (politics, culture, collective delusions, power)
- `spirit` → "On Spirit" (meaning, death, faith, awe)

## Using Themes

You can also specify themes that relate to your category. For example, with the `self` category, you can use themes like:

- `identity` - Understanding who you are
- `ego` - The self-image and how it shapes experiences
- `growth` - Personal development and self-improvement
- `discipline` - Self-control and consistent practice
- `mental-health` - Psychological well-being and emotional balance

## Frontmatter Example

```yaml
---
title: 'Your Note Title'
description: 'Your note description'
pubDate: '2024-01-15'
category: 'self'  # Use the slug, not the full name
themes: ['identity', 'growth']  # Optional array of theme slugs
tags: ['additional', 'tags']  # Legacy tags still work
---
```

The system will automatically:
- Convert `self` to "On Self" for display
- Convert `identity` to "Identity" for display
- Provide colors and icons for styling
- Validate that your category and themes exist

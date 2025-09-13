/**
 * Calculate estimated reading time for content
 * Based on average reading speed of 200 words per minute
 */
export function calculateReadingTime(content: string): number {
	const wordsPerMinute = 200;
	const wordCount = content.trim().split(/\s+/).length;
	const readingTime = Math.ceil(wordCount / wordsPerMinute);
	return Math.max(1, readingTime); // Minimum 1 minute
}

/**
 * Calculate reading time from markdown content
 * Strips markdown syntax and calculates based on plain text
 */
export function calculateReadingTimeFromMarkdown(markdown: string): number {
	// Remove markdown syntax
	const plainText = markdown
		.replace(/#{1,6}\s+/g, '') // Remove headers
		.replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
		.replace(/\*(.*?)\*/g, '$1') // Remove italic
		.replace(/`(.*?)`/g, '$1') // Remove inline code
		.replace(/```[\s\S]*?```/g, '') // Remove code blocks
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
		.replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
		.replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
		.replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list markers
		.replace(/>\s*/g, '') // Remove blockquote markers
		.replace(/\n\s*\n/g, '\n') // Remove extra newlines
		.trim();

	return calculateReadingTime(plainText);
}

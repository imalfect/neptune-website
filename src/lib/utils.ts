import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { fetchArticlesMetadata } from './articleFetch';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function sortArticles(articles: Awaited<ReturnType<typeof fetchArticlesMetadata>>) {
	articles = articles.filter((article) => !article.hidden);
	return articles.sort((a, b) => {
		if (a.pinned && !b.pinned) return -1;
		if (!a.pinned && b.pinned) return 1;
		if (a.weight !== undefined && b.weight !== undefined) {
			return a.weight - b.weight;
		}
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});
}

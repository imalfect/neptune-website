export interface ArticleMetadata {
	title: string;
	description: string;
	date: string;
	author: string;
	thumbnail: {
		src: string;
		caption?: string;
	};
	type: ArticleType;
}

export enum ArticleType {
	Learn = 'learn',
	Blog = 'blog'
}

import { Metadata } from 'next';

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
	webMetadata?: Metadata;
}

export enum ArticleType {
	Learn = 'learn',
	Blog = 'blog'
}

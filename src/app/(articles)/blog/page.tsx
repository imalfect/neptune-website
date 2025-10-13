import ArticleCard from '@/components/cards/ArticleCard';
import { fetchArticlesMetadata } from '@/lib/articleFetch';
import { sortArticles } from '@/lib/utils';
import { type Metadata } from 'next';
import { ArticleType } from '../types';
const description = 'Latest updates and insights about Neptune.';
export const metadata: Metadata = {
	title: 'Blog - Neptune Cash',
	description: description,
	openGraph: {
		title: 'Blog - Neptune Cash',
		description: description,
		siteName: 'Neptune Cash Blog',
		images: [
			{
				url: '/og-image-blog.png', // TODO - replace with absolute URL in production
				width: 1200,
				height: 630,
				alt: 'Blog - Neptune Cash'
			}
		],
		locale: 'en_US',
		type: 'website'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Blog - Neptune Cash',
		description: description,
		images: ['/og-image-blog.png'] // TODO - this will not work now!!, replace with absolute URL in production
	},
	alternates: {
		canonical: 'https://neptune.cash/blog'
	},
	robots: {
		index: true,
		follow: true
	},
	category: 'cryptocurrency'
};
export default async function BlogPage() {
	const articles = sortArticles(await fetchArticlesMetadata(ArticleType.Blog));
	return (
		<div className="mx-auto mt-36 flex max-w-[96rem] flex-col">
			<div className="space-y-1.5">
				<h1 className="mb-1.5 text-6xl font-bold tracking-tight">Neptune Blog</h1>
				<p className="mb-10 text-2xl">Read what the developers have to say.</p>
			</div>
			<div className="flex flex-wrap gap-18">
				{articles.map((article) => (
					<ArticleCard key={article.slug} article={article} />
				))}
			</div>
		</div>
	);
}

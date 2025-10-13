import ArticleCard from '@/components/cards/ArticleCard';
import { fetchArticlesMetadata } from '@/lib/articleFetch';
import { sortArticles } from '@/lib/utils';
import { type Metadata } from 'next';
import { ArticleType } from '../types';
const description =
	'Educational materials and tutorials to expand your knowledge on how Neptune works.';
export const metadata: Metadata = {
	title: 'Learn - Neptune Cash',
	description: description,
	openGraph: {
		title: 'Learn - Neptune Cash',
		description: description,
		siteName: 'Neptune Cash Learn',
		images: [
			{
				url: '/og-image-learn.png', // TODO - replace with absolute URL in production
				width: 1200,
				height: 630,
				alt: 'Learn - Neptune Cash'
			}
		],
		locale: 'en_US',
		type: 'website'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Learn - Neptune Cash',
		description: description,
		images: ['/og-image-learn.png'] // TODO - this will not work now!!, replace with absolute URL in production
	},
	alternates: {
		canonical: 'https://neptune.cash/learn'
	},
	robots: {
		index: true,
		follow: true
	},
	category: 'cryptocurrency'
};
export default async function LearnPage() {
	const articles = sortArticles(await fetchArticlesMetadata(ArticleType.Learn));
	return (
		<div className="mx-auto mt-36 flex max-w-[96rem] flex-col">
			<div className="space-y-1.5">
				<h1 className="text-page-title mb-1.5">Learn about Neptune</h1>
				<p className="text-page-subtitle mb-10">
					Educational materials and tutorials to expand your knowledge on how Neptune works.
				</p>
			</div>
			<div className="flex flex-wrap gap-18">
				{articles.map((article) => (
					<ArticleCard key={article.slug} article={article} />
				))}
			</div>
		</div>
	);
}

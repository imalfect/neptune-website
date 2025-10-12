import ArticleCard from '@/components/cards/ArticleCard';
import { fetchArticlesMetadata } from '@/lib/articleFetch';
import { sortArticles } from '@/lib/utils';
import { ArticleType } from '../types';

export default async function LearnPage() {
	const articles = sortArticles(await fetchArticlesMetadata(ArticleType.Learn));
	return (
		<div className="mx-auto mt-36 flex max-w-[96rem] flex-col">
			<div className="space-y-1.5">
				<h1 className="text-page-title mb-1.5">Learn about Neptune</h1>
				<p className="text-page-subtitle mb-10">Explore our collection of articles and tutorials.</p>
			</div>
			<div className="flex flex-wrap gap-18">
				{articles.map((article) => (
					<ArticleCard key={article.slug} article={article} />
				))}
			</div>
		</div>
	);
}

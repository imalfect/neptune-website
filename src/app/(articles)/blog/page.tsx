import ArticleCard from '@/components/cards/ArticleCard';
import { fetchArticlesMetadata } from '@/lib/articleFetch';
import { sortArticles } from '@/lib/utils';
import { ArticleType } from '../types';

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

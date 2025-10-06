import { ArticleMetadata, ArticleType } from '@/app/(articles)/types';
import { glob } from 'glob';
import 'server-only';
export async function fetchArticleSlugs() {
	const articles = await glob(`./src/articles/*.mdx`);
	return articles.map((path) => {
		const parts = path.split('/');
		const filename = parts[parts.length - 1];
		return filename.replace('.mdx', '');
	});
}
export async function fetchArticlesMetadata(
	type: ArticleType
): Promise<(ArticleMetadata & { slug: string })[]> {
	const slugs = await fetchArticleSlugs();
	const metadataList = await Promise.all(
		slugs.map(async (slug) => {
			const post = await import(`@/articles/${slug}.mdx`);
			return { ...(post.metadata as ArticleMetadata), slug };
		})
	);
	return metadataList.filter((meta) => meta.type === type);
}

export async function fetchArticleMetadata(slug: string): Promise<ArticleMetadata> {
	const post = await import(`@/articles/${slug}.mdx`);
	return post.metadata;
}

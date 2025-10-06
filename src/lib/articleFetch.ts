import { ArticleMetadata, ArticleType } from '@/app/(articles)/types';
import { glob } from 'glob';
import 'server-only';
export async function fetchArticleSlugs() {
	const articles = await glob(`src/articles/**/*.mdx`);
	return articles.map((path) => {
		const parts = path.split('/');
		const filename = parts[parts.length - 1];
		return filename.replace('.mdx', '');
	});
}

export async function fetchArticlePaths() {
	const articlePaths = await glob(`src/articles/**/*.mdx`);
	return articlePaths.map((path) => {
		const parts = path.split('/');
		return parts[parts.length - 1].replace('.mdx', '');
	});
}

export async function findArticlePathBySlug(slug: string) {
	const articles = await glob(`src/articles/**/*.mdx`);
	const matchedArticle = articles.find((path) => {
		return path.endsWith(`${slug}.mdx`);
	});
	return matchedArticle ? matchedArticle.split('/').pop()?.replace('.mdx', '') : undefined;
}
export async function fetchArticlesMetadata(
	type: ArticleType
): Promise<(ArticleMetadata & { slug: string })[]> {
	const slugs = await fetchArticlePaths();
	const metadataList = await Promise.all(
		slugs.map(async (slug) => {
			const post = await import(`@/articles/${slug}.mdx`);
			return { ...(post.metadata as ArticleMetadata), slug };
		})
	);
	return metadataList.filter((meta) => meta.type === type);
}

export async function fetchArticleMetadataByPath(slug: string): Promise<ArticleMetadata> {
	const post = await import(`@/articles/${slug}.mdx`);
	return post.metadata;
}

export async function fetchArticleMetadataBySlug(
	slug: string
): Promise<(ArticleMetadata & { slug: string }) | null> {
	const filename = await findArticlePathBySlug(slug);
	if (!filename) {
		return null;
	}
	const post = await import(`@/articles/${filename}.mdx`);
	return { ...(post.metadata as ArticleMetadata), slug };
}

export async function fetchArticleBySlug(slug: string) {
	console.log('Fetching article for slug:', slug);
	const filename = await findArticlePathBySlug(slug);
	console.log('Found filename:', filename);
	if (!filename) {
		return null;
	}
	const post = await import(`@/articles/${filename}.mdx`);
	return post;
}

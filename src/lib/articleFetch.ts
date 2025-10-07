import { ArticleMetadata, ArticleType } from '@/app/(articles)/types';
import { glob } from 'glob';
import 'server-only';

function toSlug(fsPath: string): string {
	return fsPath.split('/').pop()!.replace('.mdx', '');
}

function toArticlePath(fsPath: string): string {
	return fsPath.replace('src/articles/', '').replace('.mdx', '');
}

async function getArticlePaths(): Promise<string[]> {
	return await glob('src/articles/**/*.mdx');
}

async function findPathBySlug(slug: string): Promise<string | null> {
	const paths = await getArticlePaths();
	return paths.find((path) => path.endsWith(`${slug}.mdx`)) || null;
}

export async function fetchArticleSlugs(): Promise<string[]> {
	const paths = await getArticlePaths();
	return paths.map(toSlug);
}

export async function fetchArticlesMetadata(
	type: ArticleType
): Promise<(ArticleMetadata & { slug: string })[]> {
	const paths = await getArticlePaths();
	const articles = await Promise.all(
		paths.map(async (path) => {
			const articlePath = toArticlePath(path);
			const post = await import(`@/articles/${articlePath}.mdx`);
			return {
				...(post.metadata as ArticleMetadata),
				slug: toSlug(path)
			};
		})
	);
	return articles.filter((article) => article.type === type);
}

export async function fetchArticleMetadataBySlug(
	slug: string
): Promise<(ArticleMetadata & { slug: string }) | null> {
	const path = await findPathBySlug(slug);
	if (!path) return null;

	const articlePath = toArticlePath(path);
	const post = await import(`@/articles/${articlePath}.mdx`);
	return {
		...(post.metadata as ArticleMetadata),
		slug
	};
}

export async function fetchArticleBySlug(slug: string) {
	const path = await findPathBySlug(slug);
	if (!path) return null;

	const articlePath = toArticlePath(path);
	return await import(`@/articles/${articlePath}.mdx`);
}

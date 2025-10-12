import { ArticleMetadata, ArticleType } from '@/app/(articles)/types';
import FocusModeSwitch from '@/components/FocusModeSwitch';
import {
	fetchArticleBySlug,
	fetchArticleMetadataBySlug,
	fetchArticleSlugs
} from '@/lib/articleFetch';
import dayjs from 'dayjs';
import 'highlight.js/styles/github-dark.css';
import 'katex/dist/katex.min.css';
import { LucideChevronLeft } from 'lucide-react';
import { MDXContent } from 'mdx/types';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Link from 'next/link';
import { notFound } from 'next/navigation';
export async function generateMetadata({
	params
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const articleMetadata = await fetchArticleMetadataBySlug(slug);

	if (!articleMetadata) {
		return {
			title: 'Article Not Found - Neptune',
			description: 'The requested article could not be found.'
		};
	}

	const metadata: ArticleMetadata = articleMetadata;

	return {
		title: `${metadata.title} - Neptune`,
		description: metadata.description,
		authors: [{ name: metadata.author }],
		openGraph: {
			title: metadata.title,
			description: metadata.description,
			type: 'article',
			publishedTime: metadata.date,
			authors: [metadata.author],
			images: [
				{
					url: metadata.thumbnail.src,
					alt: metadata.thumbnail.caption || metadata.title
				}
			]
		},
		twitter: {
			card: 'summary_large_image',
			title: metadata.title,
			description: metadata.description,
			images: [metadata.thumbnail.src]
		}
	};
}

export async function generateStaticParams() {
	const articles = await fetchArticleSlugs();
	const articlesStaticParams = articles.map((slug) => ({
		slug: slug
	}));
	return articlesStaticParams;
}

// IMPORTANT: theme provider is only used for articles, to accomodate the focus mode, the website (landing,subpages) itself should not support any theming!

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const article = await fetchArticleBySlug(slug);
	if (!article) {
		notFound();
	}
	const MDXContent: MDXContent = article.default;
	const metadata: ArticleMetadata = article.metadata;
	return (
		<ThemeProvider>
			<article className="focus-mode:bg-milk focus-mode:text-black mx-auto mt-36 max-w-5xl space-y-6 rounded-3xl bg-neutral-950/60 p-10">
				<div className="flex items-center justify-between">
					<Link href={`/${metadata.type}`} className="flex items-center gap-3 text-xl">
						<LucideChevronLeft /> Back to{' '}
						{metadata.type === ArticleType.Learn ? 'learn section' : 'posts'}
					</Link>
					<FocusModeSwitch />
				</div>

				<header>
					<h1 className="mb-2 text-4xl font-bold tracking-tight">{metadata.title}</h1>
					<p className="text-muted-foreground mb-2 text-xl">{metadata.author}</p>
					<div className="flex flex-wrap gap-4">
						<p className="text-muted-foreground text-lg">{dayjs(metadata.date).format('MMMM D, YYYY')}</p>
						<p className="text-muted-foreground text-lg">{article.readingTime.text}</p>
					</div>
				</header>

				<figure className="bg-muted/30 overflow-hidden">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={metadata.thumbnail.src}
						alt={metadata.thumbnail.caption}
						className="aspect-video h-auto w-full rounded-3xl object-cover"
					/>
					<figcaption className="text-muted-foreground px-4 py-2 text-center text-base">
						{metadata.thumbnail.caption}
					</figcaption>
				</figure>

				<section className="prose prose-neutral dark:prose-invert article mx-auto">
					<MDXContent />
				</section>
			</article>
		</ThemeProvider>
	);
}

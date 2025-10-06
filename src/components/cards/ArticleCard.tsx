import { ArticleMetadata } from '@/app/(articles)/types';
import dayjs from 'dayjs';
import { LucideNewspaper } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../buttons/Button';
export default function ArticleCard(props: { article: ArticleMetadata & { slug: string } }) {
	return (
		<div className="flex w-md flex-col overflow-hidden rounded-3xl bg-neutral-950/60">
			<Image
				src={props.article.thumbnail.src}
				alt={props.article.thumbnail.caption || props.article.title}
				className="h-52 w-full object-cover"
				width={600}
				height={300}
			/>
			<div className="p-6">
				<h2 className="text-card-title mb-2 font-bold tracking-tight">{props.article.title}</h2>
				<div className="text-small-content flex gap-3">
					<p className="text-muted-foreground">{dayjs(props.article.date).format('MMMM D, YYYY')}</p>
					<p className="text-muted-foreground">{props.article.author}</p>
				</div>
				<p className="text-content mt-4">{props.article.description}</p>
				<Link href={`/articles/${props.article.slug}`}>
					<Button variant={'primary'} className="mt-6 flex w-full" size="sm">
						<LucideNewspaper />
						<span className="mx-auto">Read Article</span>
					</Button>
				</Link>
			</div>
		</div>
	);
}

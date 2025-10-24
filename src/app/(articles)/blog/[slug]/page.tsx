import { articleIdMappings } from '@/config/articleIdMappings';
import { permanentRedirect } from 'next/navigation';

export default async function BlogSlugRedirect({ params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug;
	const mapping = articleIdMappings[slug] || slug;
	permanentRedirect(`/articles/${mapping}`);
}

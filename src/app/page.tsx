import Contribute from '@/sections/Contribute';
import FAQ from '@/sections/FAQ';
import Features from '@/sections/Features';
import Fundamentals from '@/sections/Fundamentals';
import Hero from '@/sections/Hero';
import Introduction from '@/sections/Introduction';
import Resources from '@/sections/Resources';
import Tokenomics from '@/sections/Tokenomics';
import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Neptune Cash - Sea of Privacy',
	description:
		'Anonymous, succinct. Neptune Cash is a layer-1 peer-to-peer anonymou cash protocol featuring privacy, scalability and post-quantum security.',
	openGraph: {
		title: 'Neptune Cash',
		description:
			'Anonymous, succinct. Neptune Cash is a layer-1 peer-to-peer anonymous cash protocol featuring privacy, scalability and post-quantum security.',
		siteName: 'Neptune Cash',
		images: [
			{
				url: '/og-image.png', // TODO - replace with absolute URL in production
				width: 1200,
				height: 630,
				alt: 'Neptune Cash'
			}
		],
		locale: 'en_US',
		type: 'website'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Neptune Cash',
		description:
			'Anonymous, succinct. Neptune Cash is a layer-1 peer-to-peer anonymous cash protocol featuring privacy, scalability and post-quantum security.',
		images: ['/og-image.png'] // TODO - this will not work now!!, replace with absolute URL in production
	},
	alternates: {
		canonical: 'https://neptune.cash/'
	},
	robots: {
		index: true,
		follow: true
	},
	category: 'cryptocurrency'
};
export default function Home() {
	console.log('Home page rendered');
	return (
		<div>
			<Hero />
			<div className={'mx-6 mt-12'}>
				<div className={'mx-auto flex flex-col items-center gap-24'}>
					<Introduction />
					<Features />
					<Fundamentals />
					<Tokenomics />
					<Contribute />
					<Resources />
					<FAQ />
				</div>
			</div>
		</div>
	);
}

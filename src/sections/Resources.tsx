import ResourceCard from '@/components/cards/ResourceCard';
import {
	LucideCpu,
	LucideFileText,
	LucideGithub,
	LucideGraduationCap,
	LucideMessageCircle,
	LucideNewspaper,
	LucideTrendingUp
} from 'lucide-react';
// !!! ready fully !!!
export default function Resources() {
	return (
		<section className={'home-section flex flex-col items-center gap-6'} id="resources">
			<h1 className={'text-section-title text-center font-bold'}>Resources</h1>
			<p className={'text-2xl'}>Want to dive deeper? We&apos;ve got you covered.</p>
			<div
				className={
					'grid w-full max-w-[100rem] auto-rows-[minmax(220px,1fr)] grid-cols-1 gap-4 lg:grid-cols-12'
				}
			>
				<ResourceCard
					title="Whitepaper"
					description="The complete technical foundation of Neptune Cash. Dive deep into the cryptographic protocols and consensus mechanisms."
					className="lg:col-span-8"
					backgroundIcon={<LucideFileText />}
					link={{ href: '/whitepaper' }}
					button={{ content: 'Read More', icon: <LucideFileText /> }}
				/>
				<ResourceCard
					title="Triton VM"
					description="Explore the STARK-based zero-knowledge proof system, that enables Neptune's scalable, post-quantum secure privacy for transactions."
					className="lg:col-span-4"
					backgroundIcon={<LucideCpu />}
					link={{ href: 'https://github.com/TritonVM/triton-vm', target: '_blank' }}
					button={{ content: 'Learn More', icon: <LucideCpu /> }}
				/>
				<ResourceCard
					title="Trade"
					description="Check the current price and find exchanges to trade Neptune on CoinMarketCap."
					className="lg:col-span-4"
					backgroundIcon={<LucideTrendingUp />}
					link={{ href: 'https://coinmarketcap.com/currencies/neptune-cash/', target: '_blank' }}
					button={{ content: 'Trade Now', icon: <LucideTrendingUp /> }}
				/>
				<ResourceCard
					title="GitHub"
					description="Explore Neptune's open-source codebase and contribute."
					className="lg:col-span-4"
					backgroundIcon={<LucideGithub />}
					link={{ href: 'https://github.com/Neptune-Crypto', target: '_blank' }}
					button={{ content: 'View Code', icon: <LucideGithub /> }}
				/>

				<ResourceCard
					title="Blog"
					description="Latest updates and insights about Neptune."
					className="lg:col-span-4"
					backgroundIcon={<LucideNewspaper />}
					link={{ href: '/blog' }}
					button={{ content: 'Read Blog', icon: <LucideNewspaper /> }}
				/>
				<ResourceCard
					title="Neptune Talk"
					description="Neptune's official forum for community discussions, questions, and announcements."
					className="lg:col-span-5"
					backgroundIcon={<LucideMessageCircle />}
					link={{ href: 'https://talk.neptune.cash', target: '_blank' }}
					button={{ content: 'Visit forum', icon: <LucideMessageCircle /> }}
				/>
				<ResourceCard
					title="Learn"
					description="Educational materials and tutorials to expand your knowledge on how Neptune works."
					className="lg:col-span-7"
					backgroundIcon={<LucideGraduationCap />}
					link={{ href: '/learn' }}
					button={{ content: 'Learn', icon: <LucideGraduationCap /> }}
				/>
			</div>
		</section>
	);
}

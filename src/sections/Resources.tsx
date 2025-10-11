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
					link={{ href: '#', target: '_blank' }}
					button={{ content: 'Read More', icon: <LucideFileText /> }}
				/>
				<ResourceCard
					title="Triton VM Prover"
					description="Explore the zero-knowledge proof system powering Neptune."
					className="lg:col-span-4"
					backgroundIcon={<LucideCpu />}
					link={{ href: '#', target: '_blank' }}
					button={{ content: 'Learn More', icon: <LucideCpu /> }}
				/>

				<ResourceCard
					title="GitHub"
					description="Explore our open-source codebase and contribute."
					className="lg:col-span-4"
					backgroundIcon={<LucideGithub />}
					link={{ href: '#', target: '_blank' }}
					button={{ content: 'View Code', icon: <LucideGithub /> }}
				/>
				<ResourceCard
					title="Trade"
					description="Learn where to buy and sell Neptune Cash on CoinMarketCap."
					className="lg:col-span-5"
					backgroundIcon={<LucideTrendingUp />}
					link={{ href: '#', target: '_blank' }}
					button={{ content: 'Trade Now', icon: <LucideTrendingUp /> }}
				/>
				<ResourceCard
					title="Blog"
					description="Latest updates and insights from the team."
					className="lg:col-span-3"
					backgroundIcon={<LucideNewspaper />}
					link={{ href: '#', target: '_blank' }}
					button={{ content: 'Read Blog', icon: <LucideNewspaper /> }}
				/>

				<ResourceCard
					title="Learn"
					description="Educational materials and tutorials to master Neptune Cash."
					className="lg:col-span-7"
					backgroundIcon={<LucideGraduationCap />}
					link={{ href: '#', target: '_blank' }}
					button={{ content: 'Start Learning', icon: <LucideGraduationCap /> }}
				/>
				<ResourceCard
					title="Discord"
					description="Join our Discord community."
					className="lg:col-span-5"
					backgroundIcon={<LucideMessageCircle />}
					link={{ href: '#', target: '_blank' }}
					button={{ content: 'Join Discord', icon: <LucideMessageCircle /> }}
				/>
			</div>
		</section>
	);
}

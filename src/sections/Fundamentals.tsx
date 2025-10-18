import FundamentalElement from '@/components/cards/FundamentalElement';
import { LucideCoins, LucideShield, LucideUsers } from 'lucide-react';

// !!! finished !!!
export default function Fundamentals() {
	return (
		<section className={'home-section flex flex-col gap-12 px-4'} id="fundamentals">
			<div className={'mx-auto max-w-3xl space-y-3 text-center text-pretty'}>
				<h1 className={'text-section-title font-bold'}>The Fundamentals</h1>
				<p className={'text-section-description'}>
					Neptune Cash was built with clear and deliberate strategic choices that set it apart from other
					blockchains and smart contract platforms
				</p>
			</div>
			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
				<FundamentalElement
					title="Supply Limit"
					description="The asymptotic (hard) limit on the coin supply is 42 million coins. The concrete number is irrelevant, instead the fact that this limit exists is the relevant feature. It guarantees that once you own a share of the supply, that share will never shrink."
					icon={<LucideCoins className="h-8 w-8 text-white" />}
				/>
				<FundamentalElement
					title="Premine"
					description="1.98% (831,488 coins) was premined to raise funds for bootstrapping the project and supporting initial development. The remaining supply will be mined competitively through proof-of-work by participants who purchase tokens at market prices, earning rewards in return for securing the network."
					icon={<LucideShield className="h-8 w-8 text-white" />}
				/>
				<FundamentalElement
					title="Founding Company"
					description="The founding company will dissolve shortly after launch. After that, the responsibility for fixing any remaining issues falls on a community of volunteer developers. This course of action is necessary because any project that cannot motivate a decentralized governance structure is either incapable of adaptation or decentralized in name only."
					icon={<LucideUsers className="h-8 w-8 text-white" />}
					className="md:col-span-2 xl:col-span-1"
				/>
			</div>
		</section>
	);
}

import FundamentalElement from '@/components/cards/FundamentalElement';
import { LucideCoins, LucideShield, LucideUsers } from 'lucide-react';

// !!! finished !!!
export default function Fundamentals() {
	return (
		<section className={'flex flex-col gap-12 px-4'} id='fundamentals'>
			<div className={'mx-auto max-w-3xl space-y-3 text-center text-pretty'}>
				<h1 className={'text-section-title font-bold'}>The Fundamentals</h1>
				<p className={'text-section-description'}>
					Neptune Cash made strategic design choices to differentiate itself from other
					blockchain&#8209;based monetary systems and smart contract platforms.
				</p>
			</div>
			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
				<FundamentalElement
					title="Supply Limit"
					description="The asymptotical limit on the token supply is 42,000,000. The concrete number is irrelevant. The fact that this limit exists is the relevant feature. It guarantees that once you have a slice of the pie, that slice will never shrink."
					icon={<LucideCoins className="h-8 w-8 text-white" />}
				/>
				<FundamentalElement
					title="Premine"
					description="The premine is 1.98%. It exists to raise funds to bootstrap the project. The vast majority of tokens will be mined competitively by market players who pay the market price, market players who in exchange for their reward help secure the network."
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

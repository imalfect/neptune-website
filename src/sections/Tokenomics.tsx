'use client';
import NumberCard from '@/components/cards/NumberCard';
import BlockTimeCard from '@/components/tokenomics/BlockTimeCard';
import HalvingCard from '@/components/tokenomics/HalvingCard';
import PremineCard from '@/components/tokenomics/PremineCard';
import SupplyLimitCard from '@/components/tokenomics/SupplyLimitCard';
import { useState } from 'react';

// !!! finished !!!
export enum TokenomicsAspect {
	BlockTime = 'BlockTime',
	Halving = 'Halving',
	SupplyLimit = 'SupplyLimit',
	Premine = 'Premine'
}
export default function Tokenomics() {
	const [choice, setChoice] = useState<TokenomicsAspect | null>(TokenomicsAspect.SupplyLimit);
	return (
		<section className={'home-section flex flex-col items-center gap-6'} id="tokenomics">
			<h1 className={'text-section-title font-bold'}>Tokenomics</h1>
			<p className={'text-section-description text-center'}>
				Click on the chevrons to learn more about each aspect of Neptune&apos;s tokenomics.
			</p>
			<div className={'flex flex-col justify-center gap-12 xl:flex-row'}>
				<div className="grid grid-flow-row gap-6 md:grid-cols-2 xl:w-full xl:grid-cols-1 xl:grid-rows-4">
					<NumberCard
						label="Block Time"
						value="~9.8 min"
						onSelect={setChoice}
						id={TokenomicsAspect.BlockTime}
						selected={choice === TokenomicsAspect.BlockTime}
					/>
					<NumberCard
						label="Halving"
						value="~3 years"
						onSelect={setChoice}
						id={TokenomicsAspect.Halving}
						selected={choice === TokenomicsAspect.Halving}
					/>
					<NumberCard
						label="Supply limit"
						value="42,000,000 NPT"
						onSelect={setChoice}
						id={TokenomicsAspect.SupplyLimit}
						selected={choice === TokenomicsAspect.SupplyLimit}
					/>
					<NumberCard
						label="Pre-mine"
						value="831,488 NPT"
						onSelect={setChoice}
						id={TokenomicsAspect.Premine}
						selected={choice === TokenomicsAspect.Premine}
					/>
				</div>
				<div className="relative w-full min-w-0 xl:min-w-[800px]">
					<div className={choice === TokenomicsAspect.SupplyLimit ? 'flex' : 'hidden'}>
						<SupplyLimitCard />
					</div>
					<div className={choice === TokenomicsAspect.Premine ? 'flex' : 'hidden'}>
						<PremineCard />
					</div>
					<div className={choice === TokenomicsAspect.Halving ? 'flex' : 'hidden'}>
						<HalvingCard />
					</div>
					<div className={choice === TokenomicsAspect.BlockTime ? 'flex' : 'hidden'}>
						<BlockTimeCard />
					</div>
				</div>
			</div>
			<p className="text-big-content text-center">
				You can learn more about Neptune&apos;s tokenomics{' '}
				<a href="#" className="underline">
					in this blog post
				</a>
				.
			</p>
		</section>
	);
}

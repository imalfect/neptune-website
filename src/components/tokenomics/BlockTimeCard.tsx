import AeroCard from '../cards/AeroCard';

export default function BlockTimeCard() {
	return (
		<AeroCard
			title={'Block time'}
			description={"Target block time and why it's high"}
			width={'800px'}
		>
			<div className="flex flex-col gap-8">
				<div className="text-xl">
					Neptune has a target block time of 9.8 minutes, which is the average time it takes for a new
					block to be added to the blockchain. This reason for such a high block time is that block
					proofs take a long time to build. It&apos;s over a minute per a coinbase transaction.
				</div>
			</div>
		</AeroCard>
	);
}

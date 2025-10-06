import AeroCard from '../cards/AeroCard';

export default function HalvingCard() {
	return (
		<AeroCard title={'Halving Events'} description={'Neptune halving events '} width={'800px'}>
			<div className="flex flex-col gap-8">
				<div className="text-xl">
					The halving events occur approximately every 3 years (or every 210,000 blocks), reducing the
					block reward by half. This mechanism helps to control inflation and ensures a gradual decrease
					in the rate of new token issuance, ultimately leading to a capped supply of 42 million NPT.
				</div>
			</div>
		</AeroCard>
	);
}

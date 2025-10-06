import AeroCard from '../cards/AeroCard';
import PremineChart from '../charts/PremineChart/Chart';

export default function PremineCard() {
	return (
		<AeroCard
			title={'Premine vs Mining'}
			description={'Distribution between premine and competitive mining.'}
			width={'800px'}
		>
			<div className="flex flex-col items-center gap-8">
				<div className="h-[400px] w-full">
					<PremineChart />
				</div>
				<div className="max-w-lg text-center text-xl">
					The premine (1.98%) is distributed to investors that participated in the initial funding round.
				</div>
			</div>
		</AeroCard>
	);
}

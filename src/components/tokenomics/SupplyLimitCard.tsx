import AeroCard from '../cards/AeroCard';
import SupplyChart from '../charts/SupplyLimitChart/Chart';

export default function SupplyLimitCard() {
	return (
		<AeroCard
			title={'Neptune Supply'}
			description={'Circulating and time-locked supplies, and the asymptotic supply limit.'}
			width={'800px'}
		>
			<SupplyChart />
		</AeroCard>
	);
}

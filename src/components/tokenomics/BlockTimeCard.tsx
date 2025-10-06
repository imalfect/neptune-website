import AeroCard from '../cards/AeroCard';

export default function BlockTimeCard() {
	return (
		<AeroCard title={'Block time'} description={'9.8 minute thing '} width={'800px'}>
			<div className="flex flex-col gap-8">
				<div className="text-xl">
					Neptune has a target block time of 9.8 minutes, which is the average time it takes for a new
					block to be added to the blockchain. This block time is a balance between transaction speed and
					network security, ensuring that transactions are confirmed in a timely manner while maintaining
					the integrity of the network.
				</div>
			</div>
		</AeroCard>
	);
}

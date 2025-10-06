import FeatureElement from '@/components/cards/FeatureCard';

// !!! nearly done, add images later !!!
export default function Features() {
	return (
		<section className={'flex flex-col items-center gap-6'} id="features">
			<h1 className={'text-section-title text-center'}>What sets Neptune aside</h1>
			<p className={'text-section-description max-w-2xl text-center'}>
				Take a closer look at the technical foundations that make Neptune Cash unique in today&apos;s
				blockchain landscape
			</p>
			<div
				className={
					'grid w-full max-w-6xl auto-rows-[minmax(220px,1fr)] grid-cols-1 gap-4 lg:grid-cols-12'
				}
			>
				<FeatureElement
					title="zk-STARKs"
					description={
						<>
							<p>
								Client-side proving; miners aggregate into a single block proof. First L1 protocol with
								zk-STARKs.
							</p>
						</>
					}
					imageSrc="/illustrations/quantum.svg"
					className="lg:col-span-7"
				/>

				<FeatureElement
					title="Mutator Sets"
					description={
						<p>Novel privacy primitive enabling succinctness without compromising auditability.</p>
					}
					imageSrc="/illustrations/quantum.svg"
					className="lg:col-span-5"
				/>

				<FeatureElement
					title="Post‑Quantum Security"
					description={<p>Cryptography designed to resist quantum attacks while efficient today.</p>}
					imageSrc="/illustrations/quantum.svg"
					className="lg:col-span-6"
				/>

				<FeatureElement
					title="Smart Contracts"
					description={
						<>
							<p>Arbitrary logic supported by the prover.</p>
							<p>Private smart contract platform with strong money properties.</p>
						</>
					}
					imageSrc="/illustrations/quantum.svg"
					className="lg:col-span-6"
				/>
			</div>
		</section>
	);
}

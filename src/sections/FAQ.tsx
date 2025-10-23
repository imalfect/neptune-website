import { FAQAccordion, FAQItem } from '@/components/faq/FAQItem';

export default function FAQ() {
	return (
		<section className={'home-section flex flex-col items-center gap-6 px-4'} id="faq">
			<h1 className={'text-section-title text-center font-bold'}>Frequently Asked Questions</h1>
			<p className={'text-center text-2xl'}>Got questions? We&apos;ve got answers.</p>

			<div className="mx-auto mt-8 w-full sm:w-[640px] md:w-[768px] lg:w-[896px]">
				<FAQAccordion>
					<FAQItem
						value="neptune-atomic-unit"
						question="What is Neptune's Atomic Unit?"
						answer={
							<>
								<b>Neptune&apos;s Atomic Unit</b> is NAU. It is the smallest divisible unit of Neptune,
								similar to how a Satoshi is the smallest unit of Bitcoin.{' '}
								<code>1 NPT = 1e+30 * 2^2 NAU</code>
							</>
						}
					/>
					<FAQItem
						value="current-circulating-supply"
						question="What is the current circulating, liquid supply?"
						answer="In the first three years, 64 liquid coins come into circulation with every block. Multiply 64 with the current block height to get the circulating supply."
					/>
					<FAQItem
						value="distribution-of-mined-coins"
						question="What's the distribution of mined coins? And is there a list of who the biggest holders are?"
						answer="Neptune is a privacy-preserving blockchain. That data is not available. No amounts are publicly visible, and you cannot in general see if a specific UTXO has been spent or not."
					/>
					<FAQItem
						value="emission-rate"
						question="What's the emission rate?"
						answer="A new block comes in roughly on average every 588 seconds, which is almost ten minutes. That's 144 blocks per day. Multiplying 128 with 144 gives a new supply of 18,432 coins per day, of which half is immediately liquid. The rest of the mining reward is time locked for three years. So the emission rate of liquid coins is 9,216 per day."
					/>
					<FAQItem
						value="how-does-mining-work"
						question="How does mining work? What resources are required?"
						answer={
							<div className="space-y-3">
								<p>
									In Neptune, mining consists of three steps: The Upgrader upgrades transactions by merging
									them, updating them, or raising their proof type, and in every case produces a single
									proof of correct upgrade. The Composer produces a block proposal from an aggregate transaction
									and likewise, proves the correctness of this step. Lastly, the Guesser samples the nonce
									such that the block&apos;s hash is smaller than the target, and furthermore supplies other
									information related to memory-hard proof-of-work.
								</p>
								<p>
									Proving is expensive and if you want to do it fast you need a lot of RAM. Think 50+ cores
									and 150+ GB of RAM. Up to a limit, proving is faster when you throw more cores at it.
									However, depending on the going fee and prevalence of upgradable transactions, throughput
									not speed may be the key to earning fees for Upgrading. To engage in Upgrading, start
									<code>neptune-core</code> with the flag <code>--tx-proof-upgrading</code>.
								</p>
								<p>
									The composer determines which transaction to turn into a block, and decides unilaterally
									which fraction of the block subsidy to grant to the Guesser; the remainder goes to the
									Composer. As a result, the faster Composer can earn a larger Composer fee because Guessers
									may start Guessing on their proposal before the runner-up's proposal is ready. The runner-up,
									in turn, must compensate for their slow proposal by leaving a greater reward to the Guessers.
									To enable composing, start <code>neptune-core</code> with the flag <code>--compose</code>.
								</p>
								<p>
									In contrast to the previous two steps, Guessing does not involve proving. Nevertheless,
									this step is memory-hard, which concretely means that the Guesser must use around 40 GB
									of RAM in order to guess efficiently. By default, all the available cores will be used.
									Except for a relatively short preprocessing sub-step, the nonce-sampling phase of the Guessing
									step is stateless, meaning that it doesn&apos;t	make any senseto buy half the number of
									computers (or cores) that work at twice the speed. What matters is the total number of nonce
									trials per second. To enable guessing, run <code>neptune-core</code> with the
									<code>--guess</code> flag.
								</p>
								<p>
									Besides block subsidies, the producer of a new block is entitled to any transaction fees
									of transactions confirmed in it. The Composer allocates to himself a proportion of this
									reward at his discretion; the remainder goes to the Guesser. By default, Composers are
									configured to broadcast their proposals but people who aren&apos;t afraid of digging into
									the source code might change this configuration.
								</p>
								<p>
									One last point: all mining rewards are split into two parts. Half is liquid immediately.
									The other half is time-locked for three years. This dynamic aligns miners&apos; incentives
									with the long-term success of the project.
								</p>
							</div>
						}
					/>
					<FAQItem
						value="terms-dictionary"
						question="What do the terms: composer fee, guesser fee, and block subsidy mean?"
						answer={
							<div className="space-y-3">
								<p>
									<b>The block subsidy</b> is the amount of newly minted coins. Right now every block is
									allowed to inflate the money supply by 64 coins that are immediately liquid and 64 coins
									that are timelocked for 3 years. Roughly 3 years after launch, those numbers will halve.
								</p>
								<p>
									<b>The composer fee</b> is the part of the miner reward that the composer gobbles up. This
									fee is a transaction output like any other, with no distinguishing features — and in
									particular, the amount, origin, and (if it is ever spent) destination is hidden.
								</p>
								<p>
									<b>The guesser fee</b> is the part of the miner reward that is not claimed by the composer.
									It is left in the block transaction, and automatically goes to the guesser who finds the
									right nonce.
								</p>
							</div>
						}
					/>
				</FAQAccordion>
			</div>
		</section>
	);
}

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
									In Neptune, mining consists of two steps: composing and guessing. The composer assembles a
									block by aggregating transactions and producing a proof of correctness of the entire batch.
									The guesser supplies the nonce such that the block&apos;s hash is smaller than the target.
								</p>
								<p>
									Proving is expensive and if you want to do it fast you need a lot of RAM. Think 50+ cores
									and 150+ GB of RAM. Also: up to a limit, composing is faster when you throw more cores at
									it. To enable composing, start <code>neptune-core</code> with the flag
									<code>--compose</code>.
								</p>
								<p>
									In contrast, guessing can be done on any machine that&apos;s capable of synchronizing to
									the network. By default, it will use all the available cores. Guessing is stateless,
									meaning that it doesn&apos;t make any sense to buy half the number of computers (or cores)
									that work at twice the speed. What matters is the total number of hash trials per second.
									To enable guessing, run <code>neptune-core</code> with the <code>--guess</code> flag.
								</p>
								<p>
									The producer of a new block is entitled to any transaction fees of transactions confirmed
									in it as well as the block subsidy. The composer allocates to himself a proportion of this
									reward at his discretion; the remainder goes to the guesser. By default, composers are
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
					<FAQItem
						value="transaction-speed"
						question="How fast are Neptune transactions?"
						answer="Neptune balances privacy with performance. While zero-knowledge proofs require computational overhead, we've optimized the Triton VM to process transactions efficiently. Block times are consistent, and transactions are confirmed within minutes."
					/>
				</FAQAccordion>
			</div>
		</section>
	);
}

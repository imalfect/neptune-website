import { FAQAccordion, FAQItem } from '@/components/faq/FAQItem';

export default function FAQ() {
	return (
		<section className={'home-section flex flex-col items-center gap-6 px-4'} id="faq">
			<h1 className={'text-section-title text-center font-bold'}>Frequently Asked Questions</h1>
			<p className={'text-center text-2xl'}>Got questions? We&apos;ve got answers.</p>

			<div className="mx-auto mt-8 w-full sm:w-[640px] md:w-[768px] lg:w-[896px]">
				<FAQAccordion>
					<FAQItem
						value="what-is-neptune"
						question="What is Neptune Cash?"
						answer="Neptune Cash is a privacy-focused cryptocurrency built on cutting-edge cryptographic principles. It combines zero-knowledge proofs with the Triton VM prover to ensure complete transaction privacy while maintaining security and decentralization."
					/>
					<FAQItem
						value="how-does-privacy-work"
						question="How does Neptune ensure privacy?"
						answer="Neptune uses advanced zero-knowledge proof technology to verify transactions without revealing sender, receiver, or amount information. Every transaction is cryptographically proven to be valid while keeping all details completely private."
					/>
					<FAQItem
						value="what-is-triton-vm"
						question="What is the Triton VM Prover?"
						answer="The Triton VM Prover is a state-of-the-art zero-knowledge proof system that powers Neptune's privacy features. It allows the network to verify complex computations without revealing the underlying data, ensuring both privacy and security."
					/>
					<FAQItem
						value="mining-and-supply"
						question="How does mining and supply work?"
						answer="Neptune has a fixed maximum supply with a halving schedule similar to Bitcoin. The block rewards halve periodically to ensure controlled inflation and long-term sustainability. Miners are rewarded for securing the network and processing transactions."
					/>
					<FAQItem
						value="quantum-resistant"
						question="Is Neptune quantum-resistant?"
						answer="Yes! Neptune is designed with quantum resistance in mind. Our cryptographic primitives are carefully selected to withstand attacks from both classical and quantum computers, ensuring your funds remain secure well into the future."
					/>
					<FAQItem
						value="how-to-get-started"
						question="How can I get started with Neptune?"
						answer="Getting started is easy! You can mine Neptune, trade it on supported exchanges, or receive it from others. Check out our documentation for wallet setup guides, mining tutorials, and integration resources for developers."
					/>
					<FAQItem
						value="open-source"
						question="Is Neptune open source?"
						answer="Absolutely! Neptune is fully open source and available on GitHub. We believe in transparency and community collaboration. Anyone can review the code, contribute improvements, or build applications on top of Neptune."
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

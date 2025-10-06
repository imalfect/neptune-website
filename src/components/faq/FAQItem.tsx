'use client';

import { cn } from '@/lib/utils';
import * as Accordion from '@radix-ui/react-accordion';
import { LucideChevronDown } from 'lucide-react';
import * as motion from 'motion/react-client';
import type { ReactNode } from 'react';

type FAQItemProps = {
	question: string;
	answer: ReactNode;
	value: string;
};

export function FAQItem({ question, answer, value }: FAQItemProps) {
	return (
		<Accordion.Item value={value} className="w-full min-w-0">
			<Accordion.Header className="w-full min-w-0">
				<Accordion.Trigger
					className={cn(
						'group relative flex w-full min-w-0 items-center justify-between overflow-hidden rounded-3xl',
						'bg-neutral-950/25 p-4 backdrop-blur-3xl transition-all duration-300 sm:p-6',
						'hover:scale-[1.01] hover:bg-neutral-950/30',
						'data-[state=open]:rounded-b-none'
					)}
				>
					<span className="min-w-0 flex-1 pr-4 text-left text-lg font-bold break-words text-white sm:text-xl md:text-2xl">
						{question}
					</span>
					<LucideChevronDown
						className={cn(
							'h-5 w-5 flex-shrink-0 text-white/70 transition-transform duration-300 sm:h-6 sm:w-6',
							'group-data-[state=open]:rotate-180'
						)}
					/>
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content
				className={cn(
					'w-full min-w-0 overflow-hidden',
					'data-[state=open]:animate-accordion-down',
					'data-[state=closed]:animate-accordion-up'
				)}
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.2 }}
					className={cn(
						'relative w-full min-w-0 overflow-hidden rounded-b-3xl',
						'bg-neutral-950/20 p-4 backdrop-blur-3xl sm:p-6',
						'border-t border-white/5'
					)}
				>
					<div className="overflow-wrap-anywhere w-full min-w-0 text-base leading-relaxed text-pretty break-words text-neutral-200 sm:text-lg md:text-xl">
						{answer}
					</div>
				</motion.div>
			</Accordion.Content>
		</Accordion.Item>
	);
}

export function FAQAccordion({ children }: { children: ReactNode }) {
	return (
		<Accordion.Root type="single" collapsible className="flex w-full min-w-0 flex-col gap-3 sm:gap-4">
			{children}
		</Accordion.Root>
	);
}

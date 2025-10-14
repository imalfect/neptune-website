'use client';
import { TokenomicsAspect } from '@/sections/Tokenomics';
// basic thing, label and number (or other datatype)

import clsx from 'clsx';
import { LucideChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
export default function NumberCard(props: {
	label: string;
	value: string;
	onSelect: (id: TokenomicsAspect) => void;
	selected?: boolean;
	id: TokenomicsAspect;
}) {
	return (
		<div
			className={clsx(
				`relative flex w-full max-w-[31rem] flex-col overflow-hidden rounded-3xl bg-neutral-950/25 p-6 backdrop-blur-3xl`
			)}
		>
			<div className="mb-6 flex items-center justify-between">
				<div className="flex items-center gap-4">
					<p className="text-number-card-title text-white">{props.label}</p>

					<svg
						width="12"
						height="12"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={clsx(!props.selected && 'hidden', 'animate-pulse transition-opacity')} // hide if not selected
					>
						<circle cx="12" cy="12" r="12" fill="#30bce6" />
					</svg>
				</div>
				<motion.button
					initial={false}
					whileHover={{ x: 5, scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: 'spring', stiffness: 300, damping: 30 }}
					onClick={() => props.onSelect(props.id)}
				>
					<LucideChevronRight size={32} />
				</motion.button>
			</div>
			<div className="flex items-end justify-between">
				<p className="text-number-card-data text-right font-bold text-white">{props.value}</p>
			</div>
		</div>
	);
}

import { cn } from '@/lib/utils';
import { LucideChevronRight } from 'lucide-react';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import type { ReactNode } from 'react';
type FeatureElementProps = {
	title: string;
	description: ReactNode;
	imageSrc: string;
	className?: string;
};

export default function FeatureCard(props: FeatureElementProps) {
	const bgVariants = {
		rest: { scale: 1, opacity: 0.1 },
		hover: { scale: 1.05, opacity: 0.2 }
	} as const;
	return (
		<motion.div
			initial="rest"
			animate="rest"
			whileHover="hover"
			className={cn(
				`relative flex h-72 flex-col justify-end overflow-hidden rounded-3xl bg-neutral-950/25 p-6 backdrop-blur-3xl`,
				props.className
			)}
		>
			<motion.div
				variants={bgVariants}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				className="pointer-events-none absolute inset-0 z-0 will-change-transform"
			>
				<Image
					src={props.imageSrc}
					alt=""
					aria-hidden
					fill
					sizes="100vw"
					className={`scale-150 object-cover`}
				/>
			</motion.div>
			<div className={`relative z-10 flex items-end justify-between`}>
				<div className="max-w-md">
					<h2 className="text-card-title text-left text-balance text-white">{props.title}</h2>
					<div className="text-content mt-4 space-y-1 text-left text-pretty text-neutral-200">
						{props.description}
					</div>
				</div>
				<motion.button
					initial={false}
					whileHover={{ rotate: 90 }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: 'spring', stiffness: 300, damping: 30 }}
					className="bg-gray/10 rounded-full p-6"
				>
					<LucideChevronRight size={32} />
				</motion.button>
			</div>
		</motion.div>
	);
}

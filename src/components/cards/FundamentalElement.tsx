import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';
import { ReactNode } from 'react';

type FundamentalElementProps = {
	title: string;
	description: string;
	cardClassName?: string;
	icon: ReactNode;
	className?: string;
};

export default function FundamentalCard(props: FundamentalElementProps) {
	return (
		<motion.div className={cn('flex flex-col', props.className)}>
			<div
				className={cn(
					'relative flex h-full flex-col overflow-hidden rounded-3xl',
					'bg-neutral-950/25 p-8 backdrop-blur-3xl',
					props.cardClassName
				)}
			>
				<div className="absolute top-6 right-6 scale-500 opacity-10">{props.icon}</div>

				<div className="relative z-10 flex flex-col gap-4">
					<div className="flex items-start gap-4">
						<div className="flex items-center justify-center rounded-2xl bg-white/5 p-4 backdrop-blur-sm">
							{props.icon}
						</div>
						<h2 className="text-card-title mt-0.5 font-bold text-white">{props.title}</h2>
					</div>

					<p className="text-content leading-relaxed text-pretty text-neutral-200">
						{props.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

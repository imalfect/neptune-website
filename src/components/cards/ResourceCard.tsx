import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';
import type { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import Button from '../buttons/Button';
type FeatureElementProps = {
	title: string;
	description: ReactNode;
	className?: string;
	backgroundIcon: ReactNode;
	link: {
		href: string;
		target?: HTMLAttributeAnchorTarget;
	};
	button: {
		content: string;
		icon?: ReactNode;
	};
};

export default function ResourceCard(props: FeatureElementProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.01, y: -5, x: 5 }}
			className={cn(
				`relative flex h-72 overflow-hidden rounded-3xl bg-neutral-950/25 p-6 backdrop-blur-3xl`,
				props.className
			)}
		>
			<div className="flex max-w-md flex-col">
				<h2 className="text-left text-4xl font-bold text-balance text-white">{props.title}</h2>
				<div className="text-content mt-4 space-y-1 text-left text-pretty text-neutral-200">
					{props.description}
				</div>
				<Button size="sm" className="mt-auto w-fit">
					{props.button.icon} {props.button.content}
				</Button>
			</div>
			<div className="absolute top-1/2 right-0 z-0 -translate-y-1/2 scale-1000 opacity-10">
				{props.backgroundIcon}
			</div>
		</motion.div>
	);
}

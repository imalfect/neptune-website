import { Noise } from '@/components/ui/WobbleCard';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function AeroCard(props: {
	title: string;
	description: string;
	children: ReactNode;
	height?: string;
	width?: string;
}) {
	return (
		<div
			className={cn(
				'relative mx-auto w-full overflow-hidden rounded-2xl',
				'bg-neutral-950/25 backdrop-blur-3xl'
			)}
			style={{
				maxWidth: props.width || '100%'
			}}
		>
			<div
				className="relative h-full overflow-hidden sm:mx-0 sm:rounded-2xl"
				style={{
					boxShadow:
						'0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)'
				}}
			>
				<div className={cn('h-full px-4 py-8 sm:px-10')}>
					<Noise />
					<div className="mb-8 text-center">
						<h2 className="text-card-title mb-2 font-bold text-white">{props.title}</h2>
						<p className="text-content text-white/70">{props.description}</p>
					</div>

					<div
						className={cn('w-full')}
						style={{
							height: props.height || 'auto'
						}}
					>
						<div
							style={{
								height: '500px'
							}}
						>
							{props.children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

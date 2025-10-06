'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React, { useCallback, useRef } from 'react';

export const WobbleCard = ({
	children,
	containerClassName,
	className
}: {
	children: React.ReactNode;
	containerClassName?: string;
	className?: string;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = useCallback((event: React.MouseEvent<HTMLElement>) => {
		const container = containerRef.current;
		const content = contentRef.current;
		if (!container || !content) return;

		const { clientX, clientY } = event;
		const rect = container.getBoundingClientRect();
		const x = (clientX - (rect.left + rect.width / 2)) / 20;
		const y = (clientY - (rect.top + rect.height / 2)) / 20;

		container.style.setProperty('--x', `${x}px`);
		container.style.setProperty('--y', `${y}px`);
		content.style.setProperty('--x', `${-x}px`);
		content.style.setProperty('--y', `${-y}px`);

		container.style.transform = `translate3d(var(--x), var(--y), 0) scale3d(1, 1, 1)`;
		content.style.transform = `translate3d(var(--x), var(--y), 0) scale3d(1.03, 1.03, 1)`;
	}, []);

	const handleMouseEnter = useCallback(() => {
		const container = containerRef.current;
		const content = contentRef.current;
		if (!container || !content) return;

		container.style.transition = 'transform 0.1s ease-out';
		content.style.transition = 'transform 0.1s ease-out';
	}, []);

	const handleMouseLeave = useCallback(() => {
		const container = containerRef.current;
		const content = contentRef.current;
		if (!container || !content) return;

		container.style.setProperty('--x', '0px');
		container.style.setProperty('--y', '0px');
		container.style.transform = 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)';
		content.style.transform = 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)';
	}, []);

	return (
		<motion.section
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={cn(
				'relative mx-auto w-full overflow-hidden rounded-2xl',
				'bg-neutral-950/25 backdrop-blur-3xl',
				containerClassName
			)}
			style={{
				transition: 'transform 0.1s ease-out',
				transform: 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)'
			}}
		>
			<div
				className="relative h-full overflow-hidden sm:mx-0 sm:rounded-2xl"
				style={{
					boxShadow:
						'0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)'
				}}
			>
				<motion.div
					ref={contentRef}
					className={cn('h-full px-4 py-20 sm:px-10', className)}
					style={{
						transition: 'transform 0.1s ease-out',
						transform: 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)'
					}}
				>
					<Noise />
					{children}
				</motion.div>
			</div>
		</motion.section>
	);
};

export const Noise = () => {
	return (
		<div
			className="absolute inset-0 h-full w-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
			style={{
				backgroundImage: 'url(/noise.webp)',
				backgroundSize: '30%'
			}}
		></div>
	);
};

'use client';
import Button from '@/components/buttons/Button';
import { LucideArrowDown, LucideLink } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa6';
// !!! ready fully !!!
export default function Hero() {
	const containerRef = useRef<HTMLElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start']
	});
	const opacity = useTransform(scrollYProgress, [0.5, 0.85], [1, 0]);
	return (
		<section
			className={'hero flex h-screen flex-col items-center justify-center gap-6'}
			ref={containerRef}
		>
			<div className={'space-y-3 text-center'}>
				<Image
					priority
					src={'/brand/neptune-text-logo.svg'}
					alt={'neptune logo'}
					width={220}
					height={64}
					className={'mx-auto'}
				/>
				<h1 className={'text-hero-headline'}>Anonymous, succinct.</h1>
				<p className={'text-hero-subtitle mx-auto max-w-2xl px-6 text-pretty'}>
					Meet Neptune, a Layer-1 peer-to-peer privacy-preserving cash protocol featuring scalability and
					post-quantum security.
				</p>
			</div>
			<div
				className={
					'grid grid-flow-col grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-1 md:gap-12'
				}
			>
				<Button variant={'primary'} href="/whitepaper" target="_blank">
					<LucideLink className={'left-0 mr-auto'} />
					<span className={'mx-auto'}>Whitepaper</span>
				</Button>
				<Button variant={'outline'} href="https://github.com/neptune-crypto" target="_blank">
					<FaGithub className={'left-0 mr-auto scale-110'} />
					<span className={'mx-auto'}>GitHub</span>
				</Button>
			</div>
			<motion.div className={'absolute bottom-10 hidden md:block'} style={{ opacity }}>
				<LucideArrowDown size={48} />
			</motion.div>
		</section>
	);
}

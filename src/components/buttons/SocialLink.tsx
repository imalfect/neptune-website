'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface SocialLinkProps {
	icon: ReactNode;
	href: string;
	className?: string;
	label?: string;
}

export default function SocialLink({ icon, href, className, label }: SocialLinkProps) {
	return (
		<Link href={href} passHref legacyBehavior>
			<motion.a
				whileHover={{
					scale: 1.1,
					y: -2
				}}
				whileTap={{
					scale: 0.95
				}}
				className={cn(
					'inline-flex items-center justify-center text-white transition-opacity hover:opacity-70',
					className
				)}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={label}
			>
				{icon}
			</motion.a>
		</Link>
	);
}

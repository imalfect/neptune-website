'use client';
import Button from '@/components/buttons/Button';
import {
	MobileNav,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	Navbar,
	NavbarLogo,
	NavBody,
	NavItems
} from '@/components/ui/ResizableNavbar';
import { LucideScroll } from 'lucide-react';
import { useState } from 'react';

export function WebsiteNavbar() {
	const navItems = [
		{
			name: 'Features',
			link: '/#introduction'
		},
		{
			name: 'Fundamentals',
			link: '/#features'
		},
		{
			name: 'Tokenomics',
			link: '/#tokenomics'
		},
		{
			name: 'Contribute',
			link: '/#contribute'
		},
		{
			name: 'Resources',
			link: '/#resources'
		},
		{
			name: 'Learn',
			link: '/learn'
		},
		{
			name: 'Blog',
			link: '/blog'
		}
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<>
			<Navbar>
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<Button
						variant={'primary'}
						size={'sm'}
						href={'/whitepaper.pdf'}
						target={'_blank'}
						className="z-10"
					>
						<LucideScroll className={'left-0 mr-auto'} />
						<span className={'mx-auto'}>Whitepaper</span>
					</Button>
				</NavBody>

				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</MobileNavHeader>
				</MobileNav>
			</Navbar>

			{/* Mobile Menu - Rendered outside Navbar */}
			<MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
				{navItems.map((item, idx) => (
					<a
						key={`mobile-link-${idx}`}
						href={item.link}
						onClick={() => setIsMobileMenuOpen(false)}
						className="relative w-full rounded-lg px-4 py-3 text-lg font-medium text-white transition-colors hover:bg-white/10 dark:hover:bg-neutral-900/50"
					>
						<span className="block">{item.name}</span>
					</a>
				))}
				<Button
					variant={'primary'}
					size={'sm'}
					href={'/whitepaper.pdf'}
					target={'_blank'}
					className="mt-2 w-full"
				>
					<LucideScroll className={'left-0 mr-auto'} />
					<span className={'mx-auto'}>Whitepaper</span>
				</Button>
			</MobileNavMenu>
		</>
	);
}

import SocialLink from '@/components/buttons/SocialLink';
import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaFacebook, FaTelegram, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
	return (
		<footer className="mt-auto w-full">
			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-3">
						<Image src="/neptune-text-logo.svg" alt="Neptune Cash" width={120} height={40} />
					</Link>

					{/* Links */}
					<nav className="flex flex-wrap justify-center gap-8">
						<Link href="#" className="text-lg text-white transition-opacity hover:opacity-70">
							Whitepaper
						</Link>
						<Link href="#" className="text-lg text-white transition-opacity hover:opacity-70">
							Documentation
						</Link>
						<Link href="/blog" className="text-lg text-white transition-opacity hover:opacity-70">
							Blog
						</Link>
						<Link href="/learn" className="text-lg text-white transition-opacity hover:opacity-70">
							Learn
						</Link>
					</nav>

					<div className="flex items-center gap-6">
						<SocialLink icon={<FaDiscord size={28} />} href="#" label="Discord" />
						<SocialLink icon={<FaTelegram size={27} />} href="#" label="Telegram" />
						<SocialLink icon={<FaXTwitter size={28} />} href="#" label="Twitter" />
						<SocialLink icon={<FaFacebook size={28} />} href="#" label="Facebook" />
					</div>
				</div>
			</div>
		</footer>
	);
}

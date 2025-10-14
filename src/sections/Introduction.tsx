import Image from 'next/image';

export default function Introduction() {
	return (
		<div
			className={
				'home-section flex flex-wrap gap-12 rounded-[40px] p-6 md:gap-52 lg:gap-72 lg:bg-white lg:p-12 lg:text-black 2xl:flex-nowrap'
			}
			id="introduction"
		>
			<div className={'space-y-3'}>
				<h1 className={'text-hero-headline'}>Redefining The Cash</h1>
				<div className={'text-big-content max-w-4xl space-y-3 break-normal'}>
					<p>
						Neptune Cash is more than a privacy coin. It&apos;s the first blockchain to integrate
						zk-STARKs directly at Layer-1 and to introduce Mutator Sets, a breakthrough in private
						transactions that scale without compromise.
					</p>
					<p>
						With built-in smart contract support, Neptune is not only money; it&apos;s a platform for
						private applications and the future of finance.
					</p>
					<p>
						As the cherry on top, all cryptography used in the Neptune protocol is post-quantum secure,
						meaning that it promises to resist attacks from future quantum computers. Together with
						privacy and programmability this makes Neptune a competitor for the world&apos;s best money.
					</p>
				</div>
			</div>
			<Image
				src={'/neptune-logo.svg'}
				alt={'neptune cash logo'}
				width={350}
				height={350}
				className={'hidden 2xl:flex'}
			/>
		</div>
	);
}

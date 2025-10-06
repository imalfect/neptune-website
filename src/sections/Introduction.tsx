import Image from 'next/image';

// !!! ready fully !!!
// Kacper tu byl skibidi
export default function Introduction() {
	return (
		<div
			className={
				'flex flex-wrap gap-12 rounded-[40px] p-6 md:gap-52 lg:gap-72 lg:bg-white lg:p-12 lg:text-black 2xl:flex-nowrap'
			}
			id="introduction"
		>
			<div className={'space-y-3'}>
				<h1 className={'text-hero-headline'}>Redefining The Cash</h1>
				<div className={'text-big-content max-w-4xl space-y-3 break-normal'}>
					<p>
						Neptune Cash is more than a privacy coin. It’s the first blockchain to integrate zk-STARKs
						directly at Layer-1 and to introduce Mutator Sets a breakthrough in private transactions that
						scale without compromise.
					</p>
					<p>
						With built-in smart contract support, Neptune is not only money it’s a platform for private
						applications and the future of finance.
					</p>
					<p>
						As a cherry on top, Neptune also supports arbitrary logic. Together with privacy, this makes
						Neptune a private smart contract platform in addition to being the competitor for the
						world&nbsp;s best possible money.
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

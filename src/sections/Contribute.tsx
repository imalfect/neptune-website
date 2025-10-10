import SocialLink from '@/components/buttons/SocialLink';
import ContributorCard from '@/components/cards/ContributorCard';
import { FaDiscord, FaGithub, FaTelegram, FaXTwitter } from 'react-icons/fa6';

// !!! ready fully !!!
export default function Contribute() {
	return (
		<section className={'flex flex-col items-center gap-6'} id="contribute">
			<h1 className={'text-section-title text-center font-bold'}>Contribute</h1>
			<p className={'text-section-description text-center'}>Help build the future of digital cash.</p>
			<div className="text-big-content flex flex-col gap-16 lg:justify-between xl:flex-row xl:gap-32">
				<div className="flex max-w-2xl flex-col gap-12">
					<div className="space-y-1.5 text-pretty">
						<p>
							Neptune&apos;s strength lies in its community-driven development. Everyone is welcome to take
							part in the journey of building a decentralized future.
						</p>
						<p>
							Whether you&apos;re a developer, researcher, designer, or simply an enthusiast, your
							contributions are invaluable.
						</p>
						<p>
							Join our community to connect with others, propose enhancements, or contribute code.
							Together, we can shape the future of privacy-preserving, scalable, and secure digital cash.
						</p>
					</div>

					<div className="mt-auto flex w-full flex-col gap-6 rounded-3xl bg-neutral-950/25 p-6 backdrop-blur-3xl">
						<p className="text-3xl font-bold">Join our community</p>
						<div className="mx-auto grid grid-cols-4 gap-6 sm:gap-12">
							<SocialLink icon={<FaDiscord size={48} />} href="#" label="Discord" />
							<SocialLink icon={<FaTelegram size={48} />} href="#" label="Telegram" />
							<SocialLink icon={<FaGithub size={48} />} href="#" label="GitHub" />
							<SocialLink icon={<FaXTwitter size={48} />} href="#" label="Twitter" />
						</div>
					</div>
				</div>
				<div className="space-y-6 text-center">
					<p className="text-3xl font-bold">Core maintainers</p>
					<div className="mx-auto grid w-fit grid-cols-2 grid-rows-2 gap-3 sm:gap-8">
						<div className="w-fit rotate-3">
							<ContributorCard imageSrc="/male-avatar.svg" imageAlt="Contribute illustration" />
						</div>
						<div className="w-fit -rotate-4">
							<ContributorCard imageSrc="/male-avatar.svg" imageAlt="Contribute illustration" />
						</div>
						<div className="w-fit -rotate-6">
							<ContributorCard imageSrc="/male-avatar.svg" imageAlt="Contribute illustration" />
						</div>
						<div className="w-fit rotate-1">
							<ContributorCard imageSrc="/male-avatar.svg" imageAlt="Contribute illustration" />
						</div>
					</div>
				</div>
			</div>
			{/* <div className="mt-3 flex">
				<ContributorsBounceCards />
			</div> */}
		</section>
	);
}

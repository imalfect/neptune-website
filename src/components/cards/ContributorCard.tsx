import Image from 'next/image';

export default function ContributorCard(props: { imageSrc?: string; imageAlt?: string }) {
	return (
		<div className="relative h-42 w-42 overflow-hidden rounded-3xl md:h-56 md:w-56">
			<Image
				src={props.imageSrc || '/male-avatar.svg'}
				alt={props.imageAlt || 'Contribute illustration'}
				className="w-32 md:w-48"
				fill
			/>
		</div>
	);
}

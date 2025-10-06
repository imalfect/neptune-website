export default function ContributorCard(props: { imageSrc?: string; imageAlt?: string }) {
	return (
		<div className="flex aspect-square h-42 w-42 items-center justify-center rounded-3xl bg-neutral-950/25 p-6 backdrop-blur-3xl md:h-56 md:w-56">
			<img
				src={props.imageSrc || '/male-avatar.svg'}
				alt={props.imageAlt || 'Contribute illustration'}
				className="w-32 invert md:w-48"
			/>
		</div>
	);
}

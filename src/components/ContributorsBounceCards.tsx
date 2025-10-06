import BounceCards from '@/components/ui/BounceCards';
// NOTE: unused, to be potentially used in the future once we have more contributors
const images = [
	'/male-avatar.svg',
	'/male-avatar.svg',
	'/male-avatar.svg',
	'/male-avatar.svg'
	// urls
];

// Card size from BounceCards is 200px
// Container height is 210px, so cards must fit within this constraint
// When rotated, a 200px square's diagonal is ~283px (200 * √2)
// To fit within 210px height with rotation, we arrange in a single horizontal row

// For a row of cards, we just need horizontal spacing (single row = no vertical offset needed)
const HORIZONTAL_SPACING = 120; // Space between cards horizontally

function rand(min: number, max: number) {
	return Math.random() * (max - min) + min;
}

const transformStyles = images.map((_, index) => {
	// Arrange cards in a single horizontal row to avoid height issues
	// Calculate position relative to center
	const totalCards = images.length;
	const centerOffset = (totalCards - 1) / 2;
	const position = index - centerOffset;

	const x = position * HORIZONTAL_SPACING;
	const y = 0; // Keep all cards vertically centered

	// Very small rotation to add visual interest without exceeding bounds
	// At ±3 degrees, the height increase is minimal (~10px)
	const rotation = rand(-3, 3);

	return `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) rotate(${rotation.toFixed(2)}deg)`;
});
export default function ContributorsBounceCards() {
	return (
		<BounceCards
			className="custom-bounceCards"
			images={images}
			animationDelay={1}
			containerHeight={210}
			containerWidth={500}
			animationStagger={0.08}
			easeType="elastic.out(1, 0.5)"
			transformStyles={transformStyles}
			enableHover={false}
		/>
	);
}

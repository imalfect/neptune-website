import AnimatedLogo from '@/components/resources/AnimatedLogo';

export default function Loading() {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#040a1c]">
			<AnimatedLogo />
		</div>
	);
}

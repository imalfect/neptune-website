import Button from '@/components/buttons/Button';
import { LucideHome } from 'lucide-react';

export default function NotFound() {
	return (
		<div className="flex min-h-[60vh] flex-col items-center justify-center lg:min-h-[80vh]">
			<div className="flex flex-col items-center text-center">
				<h1 className="text-6xl font-bold tracking-tight">404</h1>
				<p className="mt-4 text-2xl">Sorry, we couldn&apos;t find this page.</p>
				<Button href="/" variant="primary" className="mt-6 w-fit">
					<LucideHome />
					Go back home
				</Button>
			</div>
		</div>
	);
}

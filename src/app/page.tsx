import Contribute from '@/sections/Contribute';
import FAQ from '@/sections/FAQ';
import Features from '@/sections/Features';
import Fundamentals from '@/sections/Fundamentals';
import Hero from '@/sections/Hero';
import Introduction from '@/sections/Introduction';
import Resources from '@/sections/Resources';
import Tokenomics from '@/sections/Tokenomics';

export default function Home() {
	console.log('Home page rendered');
	return (
		<div>
			<Hero />
			<div className={'mx-6 mt-12'}>
				<div className={'mx-auto flex flex-col items-center gap-24'}>
					<Introduction />
					<Features />
					<Fundamentals />
					<Tokenomics />
					<Contribute />
					<Resources />
					<FAQ />
				</div>
			</div>
		</div>
	);
}

'use client';

import { LucideBook, LucideTreePalm } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useIsClient } from 'usehooks-ts';
import Button from './buttons/Button';

export default function FocusModeSwitch() {
	const { theme, setTheme } = useTheme();
	const isClient = useIsClient();
	return (
		<Button
			variant={'primary'}
			size="sm"
			className="focus-mode:bg-black focus-mode:text-white transition-colors duration-500"
			onClick={() => setTheme(theme === 'focus-mode' ? 'default' : 'focus-mode')}
		>
			{isClient && theme === 'focus-mode' ? <LucideBook /> : <LucideTreePalm />}

			<span className={'mx-auto'}>Focus mode</span>
		</Button>
	);
}



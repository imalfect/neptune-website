'use client';

import { AestheticFluidBg, GridArrayBg } from 'react-color4bg';

export function Background() {
	return (
		<GridArrayBg
			className={'absolute -z-10 h-[300vh] w-full opacity-100'}
			colors={['#000000', '#559efa', '#87faff', '#1eacd8']}
			loop={true}
			rotateCanvas={60}
			speed={0.0}
			scale={20}
		/>
	);
}
export function Background1() {
	return (
		<AestheticFluidBg
			className={'absolute -z-10 h-[300vh] w-full opacity-100'}
			colors={['#213c5e', '#559efa', '#0b0b0b', '#87faff', '#1eacd8']}
			loop={true}
		/>
	);
}

export default Background1;
/*
    scale?: number;
    size?: number;
    uw?: number;
    uh?: number;
    amplitude?: number;
    radius?: number;
    borderwidth?: number;
    rotateCanvas?: number;
    rotateUnit?: number;
    speed?: number;
    noise?: number;
 */

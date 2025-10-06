'use client';
import { motion } from 'motion/react';
const transition = {
	pathLength: {
		duration: 1.5,
		ease: 'easeInOut'
	},
	fillOpacity: {
		duration: 0.3,
		ease: 'easeInOut',
		delay: 1.5
	}
};
export default function AnimatedLogo() {
	return (
		<motion.svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 300 300"
			width={500}
			height={500}
		>
			<motion.path
				initial={{ pathLength: 0, fillOpacity: 0 }}
				animate={{ pathLength: 1, fillOpacity: 1 }}
				className="st1"
				transition={transition}
				strokeLinecap={'round'}
				strokeWidth={4}
				stroke="#fff"
				fill="#fff"
				strokeDasharray="1"
				d="M98.3,223.9H73.2v-95.9c0-30.6,24.9-55.5,55.5-55.5s55.5,24.9,55.5,55.5v51.7h-25.1v-51.7
				c0-16.8-13.6-30.4-30.4-30.4s-30.4,13.6-30.4,30.4V223.9z"
			/>
			<motion.path
				initial={{ pathLength: 0, fillOpacity: 0 }}
				animate={{ pathLength: 1, fillOpacity: 1 }}
				strokeLinecap={'round'}
				className="st1"
				transition={transition}
				strokeWidth={4}
				stroke="#fff"
				fill="#fff"
				strokeDasharray="1"
				d="M171.3,227.5c-30.6,0-55.5-24.9-55.5-55.5v-51.7h25.1v51.7c0,16.8,13.6,30.4,30.4,30.4s30.4-13.6,30.4-30.4
				V76.1h25.1v95.9C226.8,202.6,201.9,227.5,171.3,227.5z"
			/>
		</motion.svg>
	);
}

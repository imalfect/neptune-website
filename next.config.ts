import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
const nextConfig: NextConfig = {
	/* config options here */
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
};
const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkMath, remarkGfm],
		rehypePlugins: [rehypeKatex, rehypeHighlight]
	}
	// Add markdown plugins here, as desired
});
export default withMDX(nextConfig);

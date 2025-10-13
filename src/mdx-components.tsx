import type { MDXComponents } from 'mdx/types';
import ArticleImage from './components/articles/ArticleImage';

// Custom table wrapper to enable horizontal scrolling
const TableWrapper = ({ children }: { children: React.ReactNode }) => (
	<div className="table-scroll-wrapper">
		<table>{children}</table>
	</div>
);

const components: MDXComponents = {
	ArticleImage: ArticleImage,
	table: TableWrapper
};

export function useMDXComponents(): MDXComponents {
	return components;
}

// Helper function to format numbers with M, B, etc.

export const formatNumber = (value: number) => {
	if (value >= 1000000000) {
		return `${(value / 1000000000).toFixed(1)}B`;
	}
	if (value >= 1000000) {
		return `${(value / 1000000).toFixed(1)}M`;
	}
	if (value >= 1000) {
		return `${(value / 1000).toFixed(1)}K`;
	}
	return value.toString();
};
// Helper function to format timestamp to year
export const formatTimestamp = (timestamp: number) => {
	const date = new Date(timestamp * 1000);
	return date.getFullYear().toString();
};
 
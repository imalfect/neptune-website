import { formatNumber, formatTimestamp } from '@/lib/chartUtils';
import type { TooltipProps } from 'recharts';

type SupplyDataKey = 'liquid' | 'timelocked' | 'limit';

const ICONS: Record<SupplyDataKey, string> = {
	liquid: '💧',
	timelocked: '🔒',
	limit: '📊'
};

const LABELS: Record<SupplyDataKey, string> = {
	liquid: 'Liquid Supply',
	timelocked: 'Timelocked',
	limit: 'Total Limit'
};

type SupplyTooltipProps = TooltipProps<number, SupplyDataKey>;

// Custom tooltip component with modern design
export const SupplyLimitChartTooltip = ({ active, payload, label }: SupplyTooltipProps) => {
	if (!active || !payload?.length) {
		return null;
	}

	const formattedLabel = typeof label === 'number' ? formatTimestamp(label) : (label ?? '');

	return (
		<div
			className="rounded-xl border border-white/10 bg-neutral-950/80 p-4 shadow-2xl backdrop-blur-xl"
			style={{
				boxShadow:
					'0 10px 32px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1)'
			}}
		>
			<div className="mb-3 flex items-center gap-2 text-sm font-medium text-white/90">
				<div className="h-2 w-2 rounded-full bg-blue-400"></div>
				Year {formattedLabel}
			</div>
			<div className="space-y-2">
				{payload.map((entry, index) => {
					if (!entry) {
						return null;
					}

					const dataKey = entry.dataKey as SupplyDataKey | undefined;

					if (!dataKey || typeof entry.value !== 'number') {
						return null;
					}

					const color = typeof entry.color === 'string' ? entry.color : '#ffffff';

					return (
						<div key={`${dataKey}-${index}`} className="flex items-center justify-between gap-4">
							<div className="flex items-center gap-2">
								<span className="text-sm">{ICONS[dataKey]}</span>
								<span className="text-sm text-white/80">{LABELS[dataKey]}</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }}></div>
								<span className="text-sm font-semibold text-white">{formatNumber(entry.value)}</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

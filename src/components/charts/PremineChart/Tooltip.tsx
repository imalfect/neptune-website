import type { TooltipProps } from 'recharts';

type PremineSliceName = 'Premine' | 'Competetive mining';

interface PremineSlice {
	name: PremineSliceName;
	value: number;
	color: string;
}

type PremineTooltipProps = TooltipProps<number, PremineSliceName>;

const formatPercent = (value: number) => `${value.toFixed(2)}%`;

// Custom tooltip component with modern design
export const PremineChartTooltip = ({ active, payload }: PremineTooltipProps) => {
	if (!active || !payload?.length) {
		return null;
	}

	return (
		<div
			className="rounded-xl border border-white/10 bg-neutral-950/80 p-4 shadow-2xl backdrop-blur-xl"
			style={{
				boxShadow:
					'0 10px 32px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1)'
			}}
		>
			<div className="mb-3 text-sm font-medium text-white/90">Token distribution</div>
			<div className="space-y-2">
				{payload.map((entry, index) => {
					if (!entry || typeof entry.value !== 'number') {
						return null;
					}

					const slice = entry.payload as PremineSlice | undefined;

					if (!slice) {
						return null;
					}

					return (
						<div key={`${slice.name}-${index}`} className="flex items-center justify-between gap-4">
							<div className="flex items-center gap-2">
								<div className="h-3 w-3 rounded-full" style={{ backgroundColor: slice.color }}></div>
								<span className="text-sm text-white/80">{slice.name}</span>
							</div>
							<span className="text-sm font-semibold text-white">{formatPercent(slice.value)}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

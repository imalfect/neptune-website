'use client';
import { supplyChartData } from '@/components/charts/SupplyLimitChart/data';
import { formatNumber, formatTimestamp } from '@/lib/chartUtils';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { SupplyLimitChartTooltip } from './Tooltip';

export default function SupplyChart() {
	const legendLabelMap = {
		liquid: 'Liquid Supply',
		timelocked: 'Timelocked',
		limit: 'Total Limit'
	} as const;

	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart
				width={500}
				height={400}
				margin={{
					left: 30
				}}
				data={supplyChartData}
			>
				<XAxis
					dataKey="timestamp"
					axisLine={{ stroke: '#ffffff' }}
					tickLine={{ stroke: '#ffffff' }}
					tick={{ fill: '#ffffff', fontSize: 12 }}
					tickFormatter={formatTimestamp}
					height={60}
					label={{
						value: 'Year',
						position: 'insideBottom',
						offset: 10,
						className: 'hidden md:block',
						style: {
							fill: '#ffffff',
							textAnchor: 'middle',
							fontSize: '14px',
							fontWeight: 'bold'
						}
					}}
				/>
				<YAxis
					axisLine={{ stroke: '#ffffff' }}
					tickLine={{ stroke: '#ffffff' }}
					tick={{ fill: '#ffffff', fontSize: 12 }}
					tickFormatter={formatNumber}
					width={20}
					domain={[0, 45000000]}
					label={{
						value: 'Tokens',
						angle: -90,
						position: 'insideLeft',
						offset: -20,
						className: 'hidden md:block',
						style: {
							fill: '#ffffff',
							textAnchor: 'middle',
							fontSize: '14px',
							fontWeight: 'bold'
						}
					}}
				/>
				<Tooltip content={<SupplyLimitChartTooltip />} />
				<Legend
					wrapperStyle={{
						color: '#ffffff',
						paddingTop: '5px',
						fontSize: '18px'
					}}
					iconType="circle"
					formatter={(value) => legendLabelMap[value as keyof typeof legendLabelMap] ?? value}
				/>
				<Line type="monotone" dataKey="liquid" stroke="#3acbe8" strokeWidth={3} dot={false} />
				<Line type="monotone" dataKey="timelocked" stroke="#88a9c3" strokeWidth={3} dot={false} />
				<Line type="monotone" dataKey="limit" stroke="#fffde7" strokeWidth={3} dot={false} />
			</LineChart>
		</ResponsiveContainer>
	);
}

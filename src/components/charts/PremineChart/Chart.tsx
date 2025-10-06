'use client';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { premineChartData } from './data';
import { PremineChartTooltip } from './Tooltip';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function PremineChart() {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart width={400} height={400}>
				<Pie
					data={premineChartData}
					cx="50%"
					cy="50%"
					labelLine={false}
					outerRadius={165}
					fill="#8884d8"
					stroke="none"
					dataKey="value"
				>
					{premineChartData.map((entry, index) => (
						<Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Tooltip content={<PremineChartTooltip />} />
				<Legend
					wrapperStyle={{
						color: '#ffffff',
						paddingTop: '20px',
						fontSize: '18px'
					}}
					iconType="circle"
				/>
			</PieChart>
		</ResponsiveContainer>
	);
}

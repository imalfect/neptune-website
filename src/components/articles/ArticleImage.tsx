/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react';

export default function ArticleImage(props: {
	src: string;
	type: 'table' | 'basic';
	caption?: ReactNode;
	centered?: boolean;
	alt?: string;
}) {
	if (props.type === 'table') {
		return (
			<table className="overflow-hidden">
				<thead>
					<tr>
						<th>
							<div className={props.centered ? 'center' : ''}>
								<img src={props.src} alt={props.alt || 'Article image'} />
							</div>
						</th>
					</tr>
				</thead>
				{props.caption && (
					<tbody>
						<tr>
							<td className={props.centered ? 'center' : ''}>{props.caption}</td>
						</tr>
					</tbody>
				)}
			</table>
		);
	}

	if (props.type === 'basic') {
		return (
			<div className={props.centered ? 'center flex-col gap-3 text-center' : ''}>
				<img src={props.src} alt={props.alt || 'Article image'} />
				{props.caption && <div>{props.caption}</div>}
			</div>
		);
	}
}

import { ReactNode } from 'react';

export function ListItem({ children }: { children: ReactNode }) {
	return <li className={'pl-200'}>{children}</li>;
}

export function UList({ children }: { children: ReactNode }) {
	return (
		<ul
			className={
				'marker:text-rose-800 marker:text-[12px] list-disc ml-300 flex flex-col gap-100'
			}
		>
			{children}
		</ul>
	);
}

export function OList({ children }: { children: ReactNode }) {
	return (
		<ol
			className={
				'list-decimal ml-300 flex flex-col gap-100 marker:font-bold marker:text-brown-800'
			}
		>
			{children}
		</ol>
	);
}

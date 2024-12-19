import type { RecipeProps } from '../data';
import Divider from './ui/Divider';
import { ListItem, OList, UList } from './ui/Lists';

export default function Recipe({ data }: { data: RecipeProps }) {
	return (
		<div
			className={
				'bg-white flex flex-col md:p-500 md:gap-500 md:rounded-300 max-w-[736px]'
			}
		>
			<div className={'md:rounded-150 overflow-hidden'}>
				<img
					src={data.image.src}
					alt={data.image.alt}
				/>
			</div>

			<div className={'p-400 md:p-0 flex flex-col gap-400'}>
				{/* Header */}
				<div className={'flex flex-col gap-300'}>
					<h1 className={'text-2xl md:text-3xl font-heading text-stone-900'}>
						{data.title}
					</h1>
					<p>{data.description}</p>
				</div>

				{/* Prepartation Time */}
				<div className={'bg-rose-50 p-300 flex flex-col gap-200 rounded-150'}>
					<h2 className={'text-lg text-rose-800'}>Preparation time</h2>
					<UList>
						{data.prepTime.types.map(({ name, value }) => (
							<ListItem key={name}>
								<span className={'text-stone-600 font-bold'}>{name}</span>
								{`: ${value}`}
							</ListItem>
						))}
					</UList>
				</div>

				{/* Ingredients */}
				<div className={'flex flex-col gap-300'}>
					<h2 className={'font-heading text-brown-800 text-xl'}>Ingredients</h2>
					<UList>
						{data.ingredients.map((ingredient, index) => (
							<ListItem key={index}>{ingredient}</ListItem>
						))}
					</UList>
				</div>

				<Divider />

				{/* Instructions */}
				<div className={'flex flex-col gap-300'}>
					<h2 className={'font-heading text-brown-800 text-xl'}>
						Instructions
					</h2>
					<OList>
						{data.instructions.steps.map(({ step, description }) => (
							<ListItem key={step}>
								<span className={'font-bold'}>{step}</span>
								{`: ${description}`}
							</ListItem>
						))}
					</OList>
				</div>

				<Divider />

				{/* Nutrition */}
				<div className={'flex flex-col gap-300'}>
					<h2 className={'font-heading text-brown-800 text-xl'}>Nutrition</h2>
					<p>{data.nutrition.description}</p>
					<ul>
						{data.nutrition.types.map(({ name, value }) => (
							<li
								key={name}
								className={'group'}
							>
								<div className={'px-400 grid grid-cols-2 gap-200'}>
									<div>{name}</div>
									<div className={'font-bold text-brown-800'}>{value}</div>
								</div>
								<Divider className={'group-last:hidden my-150'} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

import Recipe from './components/Recipe';
import { recipeData } from './data';

export default function App() {
	return (
		<div className={'flex w-full h-full items-center justify-center'}>
			<Recipe data={recipeData} />
		</div>
	);
}

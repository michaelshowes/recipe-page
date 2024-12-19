export type RecipeProps = {
	image: {
		src: string;
		alt: string;
	};
	title: string;
	description: string;
	prepTime: {
		types: {
			name: string;
			value: string;
		}[];
	};
	ingredients: string[];
	instructions: {
		steps: {
			step: string;
			description: string;
		}[];
	};
	nutrition: {
		description: string;
		types: {
			name: string;
			value: string;
		}[];
	};
};

export const recipeData: RecipeProps = {
	image: {
		src: '/images/image-omelette.jpeg',
		alt: 'Simple Omelette Recipe'
	},
	title: 'Simple Omelette Recipe',
	description:
		'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
	prepTime: {
		types: [
			{ name: 'Total', value: 'Approximately 10 minutes' },
			{ name: 'Preparation', value: '5 minutes' },
			{ name: 'Cooking', value: '5 minutes' }
		]
	},
	ingredients: [
		'2-3 large eggs',
		'Salt, to taste',
		'Pepper, to taste',
		'1 tbsp butter or oil',
		'Optional fillings: cheese, diced vegetables, cooked meats, herbs'
	],
	instructions: {
		steps: [
			{
				step: 'Beat the eggs',
				description:
					'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.'
			},
			{
				step: 'Heat the pan',
				description:
					'Place a non-stick frying pan over medium heat and add butter or oil.'
			},
			{
				step: 'Cook the omelette',
				description:
					'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.'
			},
			{
				step: 'Add fillings (optional)',
				description:
					'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.'
			},
			{
				step: 'Fold and serve',
				description:
					'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.'
			},
			{
				step: 'Enjoy',
				description: 'Serve hot, with additional salt and pepper if needed.'
			}
		]
	},
	nutrition: {
		description:
			'The table below shows nutritional values per serving without the additional fillings.',
		types: [
			{ name: 'Calories', value: '277kcal' },
			{ name: 'Carbs', value: '0g' },
			{ name: 'Protein', value: '20g' },
			{ name: 'Fat', value: '22g' }
		]
	}
};

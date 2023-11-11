type Recipe = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

type Meal = {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
};

export const RECIPE_STATS = [
  {
    icon: 'https://img.icons8.com/sf-regular-filled/48/racism.png',
    text: 'Servs',
    range: 7,
  },
  {
    icon: 'https://img.icons8.com/ios/100/clock--v1.png',
    text: ' Mins',
    range: 59,
  },
  {
    icon: 'https://img.icons8.com/sf-regular-filled/96/fire-element.png',
    text: 'calories',
    range: 99,
  },
  {
    icon: 'https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/external-speedometer-marketing-and-seo-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png',
    text: '',
    range: 3,
  },
];

export type {Meal, Recipe};

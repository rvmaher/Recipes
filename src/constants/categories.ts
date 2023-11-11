export const categories = [
  {
    idCategory: '12',
    strCategory: 'Vegetarian',
    strCategoryThumb:
      'https://www.themealdb.com/images/category/vegetarian.png',
  },
  {
    idCategory: '11',
    strCategory: 'Vegan',
    strCategoryThumb: 'https://www.themealdb.com/images/category/vegan.png',
  },
  {
    idCategory: '10',
    strCategory: 'Starter',
    strCategoryThumb: 'https://www.themealdb.com/images/category/starter.png',
  },
  {
    idCategory: '9',
    strCategory: 'Side',
    strCategoryThumb: 'https://www.themealdb.com/images/category/side.png',
  },
  {
    idCategory: '8',
    strCategory: 'Seafood',
    strCategoryThumb: 'https://www.themealdb.com/images/category/seafood.png',
  },
  {
    idCategory: '7',
    strCategory: 'Pork',
    strCategoryThumb: 'https://www.themealdb.com/images/category/pork.png',
  },
  {
    idCategory: '6',
    strCategory: 'Pasta',
    strCategoryThumb: 'https://www.themealdb.com/images/category/pasta.png',
  },
  {
    idCategory: '5',
    strCategory: 'Miscellaneous',
    strCategoryThumb:
      'https://www.themealdb.com/images/category/miscellaneous.png',
  },
  {
    idCategory: '4',
    strCategory: 'Lamb',
    strCategoryThumb: 'https://www.themealdb.com/images/category/lamb.png',
  },
  {
    idCategory: '3',
    strCategory: 'Dessert',
    strCategoryThumb: 'https://www.themealdb.com/images/category/dessert.png',
  },
  {
    idCategory: '2',
    strCategory: 'Chicken',
    strCategoryThumb: 'https://www.themealdb.com/images/category/chicken.png',
  },
  {
    idCategory: '1',
    strCategory: 'Beef',
    strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
  },
] as const;

export type Category = (typeof categories)[number]['strCategory'];

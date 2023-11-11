import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Category} from '../../constants/categories';

export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1/',
    responseHandler: async response => {
      let data = await response.json();
      return data.meals;
    },
  }),
  keepUnusedDataFor: 10000,
  endpoints: builder => ({
    getRecipeByCategory: builder.query<Recipe[], Category>({
      query: category => `filter.php?c=${category}`,
    }),
    getRecipeById: builder.query<Meal[], string>({
      query: mealId => `lookup.php?i=${mealId}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetRecipeByCategoryQuery, useGetRecipeByIdQuery} = recipeApi;

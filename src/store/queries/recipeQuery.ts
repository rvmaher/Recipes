import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Category} from '../../constants/categories';
import {Meal} from '../../typings/recipeAndMeal';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    responseHandler: async response => {
      let data = await response.json();
      return data.meals;
    },
  }),
  keepUnusedDataFor: 1000,
  endpoints: builder => ({
    getRecipeByCategory: builder.query<Meal[], Category>({
      query: category => `filter.php?c=${category}`,
    }),
    getRecipeById: builder.query<Meal[], string>({
      query: mealId => `lookup.php?i=${mealId}`,
    }),
    getRecipeBySearchstring: builder.query<Meal[], string>({
      query: searchQuery => `search.php?s=${searchQuery}`,
    }),
  }),
});

export const {
  useGetRecipeByCategoryQuery,
  useGetRecipeByIdQuery,
  useLazyGetRecipeBySearchstringQuery,
} = recipeApi;

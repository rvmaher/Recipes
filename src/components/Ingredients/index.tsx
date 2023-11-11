import React from 'react';
import {View, Text} from 'react-native';
import RecipeVideo from '../RecipeVideo';
import {KeyPair} from '../../typings/common';
import {Meal} from '../../typings/recipeAndMeal';

const Ingredients = ({recipe}: {recipe: Meal}) => {
  return (
    <View className="mt-2 space-y-2">
      <Text className="tracking-widest text-neutral-900 text-3xl mb-2">
        Ingredients
      </Text>
      {Array(20)
        .fill('')
        .map((_, idx) => {
          let val1 = (recipe as KeyPair)?.['strIngredient' + (idx + 1)];
          let val2 = (recipe as KeyPair)?.['strMeasure' + (idx + 1)];
          if (!val1) {
            return;
          }
          return (
            <View key={idx} className="flex-row space-y-1 items-baseline">
              <View className="bg-amber-400  rounded-full w-3 h-3 mx-2"></View>
              <Text className="text-xl text-neutral-900  tracking-widest">
                {val1}
                {' - '}
                <Text className="text-lg text-neutral-800">{val2}</Text>
              </Text>
            </View>
          );
        })}
      <RecipeVideo source={recipe?.strYoutube} />
      <Text className="tracking-widest text-neutral-900 text-3xl mt-4">
        Instructions
      </Text>
      <Text className="text-xl text-neutral-900  tracking-widest px-2">
        {recipe?.strInstructions}
      </Text>
    </View>
  );
};

export default Ingredients;

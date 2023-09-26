import React from 'react';
import {View, Text} from 'react-native';
import RecipeVideo from '../RecipeVideo';
const IngredientsLength = Array(20).fill('');

const Ingredients = ({recipe}: {recipe: Meal | any}) => {
  return (
    <View className="mt-2 space-y-2">
      <Text className="tracking-widest text-neutral-900 text-3xl mb-2">
        Ingredients
      </Text>
      {IngredientsLength.map(
        (_, idx) =>
          recipe?.['strIngredient' + idx + 1] && (
            <View key={idx} className="flex-row items-center space-y-1">
              <View className="bg-amber-400  rounded-full w-3 h-3 mx-2"></View>
              <Text className="text-xl text-neutral-900  tracking-widest">
                {recipe?.['strIngredient' + idx + 1]}
                {' - '}
                <Text className="text-lg text-neutral-800">
                  {recipe?.['strMeasure' + idx + 1]}
                </Text>
              </Text>
            </View>
          ),
      )}
      <RecipeVideo source={recipe?.strYoutube} />
      <Text className="tracking-widest text-neutral-900 text-3xl mt-4">
        Instructions
      </Text>
      <Text className="text-xl text-neutral-900  tracking-widest">
        {recipe?.strInstructions}
      </Text>
    </View>
  );
};

export default Ingredients;

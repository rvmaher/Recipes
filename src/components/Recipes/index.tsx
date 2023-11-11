import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import RecipeCard from '../RecipeCard';
import {Recipe} from '../../typings/recipeAndMeal';

type Props = {
  recipes: Recipe[];
  isLoading: boolean;
  fromSearch: boolean;
};

const Recipes: React.FC<Props> = ({recipes, isLoading, fromSearch}) => {
  return (
    <View className="px-4">
      <Text className="font-bold text-3xl tracking-wide mb-5">Recipes</Text>
      {(isLoading && <ActivityIndicator color={'#FFBF00'} size={48} />) || (
        <FlatList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View className="flex-1 items-center">
              <Text className="text-xl font-bold tracking-widest text-neutral-700">
                No Data Found !!
              </Text>
            </View>
          }
          numColumns={2}
          initialNumToRender={5}
          columnWrapperStyle={{columnGap: 10}}
          contentContainerStyle={{paddingBottom: 200}}
          data={recipes}
          renderItem={({index, item}) => (
            <RecipeCard
              key={item.idMeal}
              item={item}
              index={index}
              fromSearch={fromSearch}
            />
          )}
        />
      )}
    </View>
  );
};

export default React.memo(Recipes);

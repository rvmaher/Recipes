import React from 'react';
import {Image, Text, View} from 'react-native';
import {RECIPE_STATS, Recipe} from '@typings/recipeAndMeal';
import {getStat} from '@utils/helpers';

type Props = {
  item: Recipe;
};

type StatProps = {stats: (typeof RECIPE_STATS)[number]; id: string};

const StatItem: React.FC<StatProps> = ({id, stats: {icon, range, text}}) => {
  return (
    <View
      className="flex bg-amber-300 rounded-full p-2 items-center space-y-2 py-4"
      style={{width: 65}}>
      <View className="bg-white rounded-full p-[6px] py-2">
        <Image
          style={{height: 20, width: 20}}
          source={{
            uri: icon,
          }}
        />
      </View>
      <Text className="font-bold text-xs text-neutral-700 text-center">
        {getStat(text, range, id)}
      </Text>
    </View>
  );
};

const RecipeStats: React.FC<Props> = ({item}) => {
  return (
    <View className="flex-row justify-around">
      {RECIPE_STATS.map((i, idx) => (
        <StatItem stats={i} id={item.idMeal} key={idx} />
      ))}
    </View>
  );
};

export default RecipeStats;

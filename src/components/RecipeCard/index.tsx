import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable, Text} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';

type Props = {
  item: Recipe;
  index: number;
  fromSearch: boolean;
};

const RecipeCard: React.FC<Props> = ({item, index, fromSearch}) => {
  const {navigate} = useNavigation();
  return (
    <Animated.View
      entering={FadeInDown.delay(150 * index)
        .duration(600)
        .springify()}
      className="flex-1  mb-10"
      style={{
        flex: 1,
        transform: [
          {
            translateY: [10, 5, -5][index % 3],
          },
        ],
      }}>
      <Pressable
        onPress={() => {
          navigate('RecipeDetail', {item});
        }}>
        <Animated.Image
          className={'rounded-2xl'}
          sharedTransitionTag={
            fromSearch ? `search${item.idMeal}` : `img${item.idMeal}`
          }
          resizeMode="cover"
          style={{
            height: [210, 240, 190][index % 3],
            width: '100%',
            marginBottom: 5,
          }}
          source={{uri: item.strMealThumb}}
        />
      </Pressable>
      <Text numberOfLines={1} className="font-semibold ml-2 font-neutral-300">
        {item.strMeal}
      </Text>
    </Animated.View>
  );
};

export default RecipeCard;

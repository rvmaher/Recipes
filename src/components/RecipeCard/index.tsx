import {useNavigation} from '@react-navigation/native';
import {Pressable, Text} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';

const RecipeCard = ({
  item,
  index,
  fromSearch,
}: {
  item: Recipes;
  index: number;
  fromSearch: boolean;
}) => {
  const {navigate} = useNavigation();
  return (
    <Animated.View
      entering={FadeInDown.delay(150 * index)
        .duration(600)
        .springify()}
      className="flex-1  mb-10"
      style={{flex: 1}}>
      <Pressable
        onPress={() => {
          navigate('RecipeDetail', {item});
        }}>
        <Animated.Image
          className={'rounded-3xl'}
          sharedTransitionTag={
            fromSearch ? `search${item.idMeal}` : `img${item.idMeal}`
          }
          resizeMode="cover"
          style={{
            height: index % 3 === 0 ? 150 : 200,
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

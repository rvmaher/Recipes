import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, FlatList, Pressable, Text, View} from 'react-native';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

const Recipes = ({
  recipes,
  isLoading,
  fromSearch,
}: {
  recipes: Recipes[];
  isLoading: boolean;
  fromSearch: boolean;
}) => {
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
          columnWrapperStyle={{columnGap: 16}}
          contentContainerStyle={{marginBottom: 20}}
          data={recipes}
          renderItem={({index, item}) => (
            <CardItem item={item} index={index} fromSearch={fromSearch} />
          )}
        />
      )}
    </View>
  );
};

export default Recipes;

const CardItem = ({
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

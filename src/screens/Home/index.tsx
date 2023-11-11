import React, { useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import Animated, { SlideInLeft } from 'react-native-reanimated';
import Categories from '../../components/Categories';
import Recipes from '../../components/Recipes';
import SearchInput from '../../components/SearchInput';
import { Category } from '../../constants/categories';
import { useGetRecipeByCategoryQuery } from '../../store/queries/recipeQuery';
import { ScreenProps } from '../../typings/navigation';

const Home: ScreenProps<'Home'> = ({navigation}) => {
  const [activeCategory, setActiveCategory] = useState<Category>('Vegetarian');
  const [search, setSearch] = useState<string>('');

  const {
    data: recipes = [],
    isLoading,
    isFetching,
  } = useGetRecipeByCategoryQuery(activeCategory);

  return (
    <FlatList
      data={['unique']}
      className="space-y-3 pt-10"
      contentContainerStyle={{paddingBottom: 50}}
      renderItem={() => {
        return (
          <>
            <StatusBar backgroundColor={'#F1F1F1'} />
            <View className="mb-5 px-4">
              <Animated.Text
                entering={SlideInLeft.delay(600).springify()}
                className="text-neutral-500 text-base tracking-widest ">
                Hello,{' '}
                <Text className="text-amber-400  font-bold">Good Morning!</Text>
              </Animated.Text>
              <Text className="font-medium text-3xl text-neutral-400 tracking-wider ">
                Make your own food,
              </Text>
              <Text className="text-neutral-500 text-xl tracking-wider">
                stay at <Text className="text-amber-400  font-bold">Home</Text>
              </Text>
            </View>
            <SearchInput
              value={search}
              onChangeText={setSearch}
              onPress={() => {
                navigation.navigate('Search', {searchString: search});
              }}
            />
            <Categories
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <Recipes
              recipes={recipes}
              isLoading={isLoading || isFetching}
              fromSearch={false}
            />
          </>
        );
      }}
    />
  );
};

export default Home;

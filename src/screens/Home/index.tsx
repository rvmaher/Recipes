import React, {useEffect, useState} from 'react';
import {FlatList, Image, StatusBar, Text, TextInput, View} from 'react-native';
import Categories from '../../components/Categories';
import Recipes from '../../components/Recipes';
import {ScreenProps} from '../../typings/navigation';
import useAuth from '../../hooks/useAuth';
import Animated, {SlideInLeft} from 'react-native-reanimated';
import SearchInput from '../../components/SearchInput';

const Home: ScreenProps<'Home'> = ({navigation}) => {
  const [activeCategory, setActiveCategory] = useState('');
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState<string>('');
  const {user} = useAuth();
  const handleCategoryChange = async (category: string) => {
    if (category === activeCategory) {
      return;
    }
    setActiveCategory(category);
    setIsLoading(true);
    const resp = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    );
    const result = await resp.json();
    setRecipes(result.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    handleCategoryChange('Vegetarian');
    navigation.addListener('blur', () => {
      setSearch('');
    });
  }, []);
  return (
    <FlatList
      data={['unique']}
      renderItem={() => {
        return (
          <>
            <StatusBar backgroundColor={'#F1F1F1'} />
            <View className="mb-5 px-4">
              <Animated.Text
                entering={SlideInLeft.delay(600).springify()}
                className="text-neutral-500 text-base tracking-widest ">
                Hello,
                <Text className="text-amber-400  font-bold"> {user}!</Text>
              </Animated.Text>
              <Text className="font-medium text-3xl text-neutral-400 tracking-wider">
                Make your own food,
              </Text>
              <Text className="text-neutral-500 text-xl tracking-wider">
                stay at{' '}
                <Text className="text-amber-400  font-bold uppercase">
                  Home
                </Text>
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
              setActiveCategory={handleCategoryChange}
            />
            <Recipes
              recipes={recipes}
              isLoading={isLoading}
              fromSearch={false}
            />
          </>
        );
      }}
      className="space-y-3 pt-10"
      contentContainerStyle={{paddingBottom: 50}}
    />
  );
};

export default Home;

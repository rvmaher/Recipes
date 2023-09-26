import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenProps} from '../../typings/navigation';
import SearchInput from '../../components/SearchInput';
import Recipes from '../../components/Recipes';

const Search: ScreenProps<'Search'> = ({route}) => {
  const {searchString} = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState<string>(searchString);
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const searchRecipes = async () => {
    setIsLoading(true);
    const resp = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    );
    const result = await resp.json();
    setRecipes(result.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    setSearch(searchString);
    searchRecipes();
  }, []);

  return (
    <View className=" py-10">
      <SearchInput
        onChangeText={setSearch}
        onPress={searchRecipes}
        value={search}
      />
      <Recipes isLoading={isLoading} recipes={recipes} fromSearch={true} />
    </View>
  );
};

export default Search;

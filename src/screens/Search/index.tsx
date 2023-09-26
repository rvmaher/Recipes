import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenProps} from '../../typings/navigation';
import SearchInput from '../../components/SearchInput';
import Recipes from '../../components/Recipes';
import {fetchApi} from '../../utils/helpers';

const Search: ScreenProps<'Search'> = ({route}) => {
  const {searchString} = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState<string>(searchString);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const searchRecipes = async () => {
    setIsLoading(true);
    const result = await fetchApi(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    );
    setRecipes(result);
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

import Recipes from '@components/Recipes';
import SearchInput from '@components/SearchInput';
import {useLazyGetRecipeBySearchstringQuery} from '@store/queries/recipeQuery';
import {ScreenProps} from '@typings/navigation';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

const Search: ScreenProps<'Search'> = ({route}) => {
  const {searchString = ''} = route.params;
  const [search, setSearch] = useState<string>(searchString);

  const [triggerSearch, {data: recipes = [], isLoading, isFetching}] =
    useLazyGetRecipeBySearchstringQuery();

  useEffect(() => {
    triggerSearch(searchString);
  }, []);
  return (
    <View className=" py-10">
      <SearchInput
        onChangeText={setSearch}
        onPress={() => triggerSearch(search)}
        value={search}
      />
      <Recipes
        isLoading={isLoading || isFetching}
        recipes={recipes}
        fromSearch={true}
      />
    </View>
  );
};

export default Search;

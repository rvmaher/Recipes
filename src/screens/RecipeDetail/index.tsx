import React, {useEffect, useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import Animated, {FadeIn, FadeInUp} from 'react-native-reanimated';
import Ingredients from '../../components/Ingredients';
import useAuth from '../../hooks/useAuth';
import {ScreenProps} from '../../typings/navigation';

const RecipeDetail: ScreenProps<'RecipeDetail'> = ({navigation, route}) => {
  const {item} = route.params;
  const [recipeDetail, setRecipeDetail] = useState<Meal | undefined>(undefined);
  const {handleFavourites, favouriteItems} = useAuth();

  const getMealDetails = async () => {
    let resp = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`,
    );
    const result = await resp.json();
    setRecipeDetail(result.meals[0]);
  };

  useEffect(() => {
    getMealDetails();
  }, []);

  return (
    <ScrollView className="px-2" contentContainerStyle={{paddingBottom: 50}}>
      <Animated.Image
        sharedTransitionTag={`img${item.idMeal}`}
        resizeMode="cover"
        className="rounded-3xl mb-2"
        style={{height: 300, width: '100%'}}
        source={{uri: item.strMealThumb}}
      />
      <Animated.View
        entering={FadeIn.delay(500)}
        className="w-full absolute flex-row flex-1 justify-between">
        <Pressable
          className="bg-white rounded-full p-3 mx-4 mt-2"
          onPress={() => navigation.goBack()}>
          <Animated.Image
            resizeMode="cover"
            tintColor={'grey'}
            style={{height: 20, width: 20}}
            source={require('../../assets/back.png')}
          />
        </Pressable>
        <Pressable
          className="
           bg-white rounded-full p-3 mx-4 mt-2"
          onPress={() => handleFavourites(item?.idMeal)}>
          <Animated.Image
            tintColor={item?.idMeal in favouriteItems ? 'red' : 'grey'}
            resizeMode="cover"
            style={{height: 20, width: 20}}
            source={require('../../assets/like.png')}
          />
        </Pressable>
      </Animated.View>
      <Animated.View entering={FadeIn.delay(600)}>
        <Text className="text-2xl tracking-widest mb-3 ">{item.strMeal}</Text>
        <Text className="text-xl text-neutral-600 tracking-widest mb-3 ">
          {recipeDetail?.strArea}
        </Text>
      </Animated.View>
      <Animated.View entering={FadeInUp.duration(1000)}>
        <View className="flex-row justify-around">
          <View
            className="flex bg-amber-300 rounded-full p-2 items-center space-y-2 py-4"
            style={{width: 65}}>
            <View className="bg-white rounded-full p-[6px] py-2">
              <Image
                style={{height: 20, width: 20}}
                source={{uri: 'https://img.icons8.com/ios/100/clock--v1.png'}}
              />
            </View>
            <Text className="font-bold text-xs text-neutral-700 text-center">
              35 Mins
            </Text>
          </View>
          <View
            className="flex bg-amber-300 rounded-full p-2 items-center space-y-2 py-4"
            style={{width: 65}}>
            <View className="bg-white rounded-full p-[6px] py-2">
              <Image
                style={{height: 20, width: 20}}
                source={{
                  uri: 'https://img.icons8.com/sf-regular-filled/48/racism.png',
                }}
              />
            </View>
            <Text className="font-bold text-xs text-neutral-700 text-center">
              03 Servs
            </Text>
          </View>
          <View
            className="flex bg-amber-300 rounded-full p-2 items-center space-y-2 py-4"
            style={{width: 65}}>
            <View className="bg-white rounded-full p-[6px] py-2">
              <Image
                style={{height: 20, width: 20}}
                source={{
                  uri: 'https://img.icons8.com/sf-regular-filled/96/fire-element.png',
                }}
              />
            </View>
            <Text className="font-bold text-xs text-neutral-700 text-center">
              03 calories
            </Text>
          </View>
          <View
            className="flex bg-amber-300 rounded-full p-2 items-center space-y-2 py-4"
            style={{width: 65}}>
            <View className="bg-white rounded-full p-[6px] py-2">
              <Image
                style={{height: 20, width: 20}}
                source={{
                  uri: 'https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/external-speedometer-marketing-and-seo-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png',
                }}
              />
            </View>
            <Text className="font-bold text-xs text-neutral-700 text-center">
              Easy
            </Text>
          </View>
        </View>
        <Ingredients recipe={recipeDetail!} />
      </Animated.View>
    </ScrollView>
  );
};

export default RecipeDetail;

import React, {useEffect, useRef, useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import Animated, {FadeIn, FadeInUp, FadeOut} from 'react-native-reanimated';
import useAuth from '../../hooks/useAuth';
import {ScreenProps} from '../../typings/navigation';
import WebView from 'react-native-webview';
import Switch from '../../components/Switch';

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

  console.log();

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

const Ingredients = ({recipe}: {recipe: Meal}) => {
  return (
    <View className="mt-2 space-y-2">
      <Text className="tracking-widest text-neutral-900 text-3xl mb-2">
        Ingredients
      </Text>
      {IngredientsLength.map(
        i =>
          recipe?.['strIngredient' + i] && (
            <View key={i} className="flex-row items-center space-y-1">
              <View className="bg-amber-400  rounded-full w-3 h-3 mx-2"></View>
              <Text
                className="text-xl text-neutral-900  tracking-widest"
                key={i}>
                {recipe?.['strIngredient' + i]}
                {' - '}
                <Text className="text-lg text-neutral-800">
                  {recipe?.['strMeasure' + i]}
                </Text>
              </Text>
            </View>
          ),
      )}
      <RecipeVideo source={recipe?.strYoutube} />
      <Text className="tracking-widest text-neutral-900 text-3xl mt-4">
        Instructions
      </Text>
      <Text className="text-xl text-neutral-900  tracking-widest">
        {recipe?.strInstructions}
      </Text>
    </View>
  );
};

const RecipeVideo = ({source}: {source: string}) => {
  const WebviewRef = useRef<WebView>(null);
  let firstTime = false;
  let firstUrl = '';
  const [showVideo, setShowVideo] = useState(false);
  return (
    <View>
      <View className="flex-row justify-between items-center">
        <Text className="tracking-widest text-neutral-900 text-3xl mt-4 mb-5">
          Recipe Video
        </Text>
        <Switch
          value={showVideo}
          onPress={() => {
            setShowVideo(p => !p);
          }}
        />
      </View>
      {showVideo && (
        <Animated.View entering={FadeInUp.duration(200).springify()}>
          <WebView
            ref={WebviewRef}
            allowsFullscreenVideo
            onLoadEnd={e => {
              if (!firstTime) {
                firstTime = true;
                firstUrl = e.nativeEvent.url;
              }
            }}
            onLoadStart={e => {
              if (firstTime && e.nativeEvent.url !== firstUrl) {
                WebviewRef.current?.stopLoading();
                WebviewRef.current?.goBack();
              }
            }}
            style={{height: 400}}
            source={{uri: source}}
          />
        </Animated.View>
      )}
    </View>
  );
};

const IngredientsLength = Array(20)
  .fill('')
  .map((_, idx) => idx + 1);

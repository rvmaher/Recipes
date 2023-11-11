import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text} from 'react-native';
import Animated, {FadeIn, FadeInUp} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import Ingredients from '../../components/Ingredients';
import {useGetRecipeByIdQuery} from '../../store/queries/recipeQuery';
import {RootState} from '../../store/store';
import {ScreenProps} from '../../typings/navigation';
import RecipeStats from '../../components/RecipeStats';

const RecipeDetail: ScreenProps<'RecipeDetail'> = ({navigation, route}) => {
  const {item} = route.params;
  const [isFavourite, setIsFavourite] = useState(false);
  const user = useSelector((state: RootState) => state.authReducer.user);
  const {data: recipeDetail = []} = useGetRecipeByIdQuery(item?.idMeal);

  const userDocRef = firestore().collection('users').doc(user?.uid);

  const handleFavourites = () => {
    if (!isFavourite) {
      userDocRef.update({
        [item.idMeal]: item.idMeal,
      });
    } else {
      userDocRef.update({
        [item.idMeal]: firestore.FieldValue.delete(),
      });
    }
  };

  useEffect(() => {
    // const unsubscribe = userDocRef.onSnapshot(snapshotQuery => {
    //   if (item?.idMeal in (snapshotQuery.data() as KeyPair)) {
    //     setIsFavourite(true);
    //   } else {
    //     setIsFavourite(false);
    //   }
    // });
    // return unsubscribe;
  }, []);

  return (
    <ScrollView className="px-2" contentContainerStyle={{paddingBottom: 50}}>
      <Animated.Image
        sharedTransitionTag={`img${item.idMeal}`}
        resizeMode="cover"
        className="rounded-2xl mb-2"
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
          onPress={() => handleFavourites()}>
          <Animated.Image
            tintColor={isFavourite ? 'red' : 'grey'}
            resizeMode="cover"
            style={{height: 20, width: 20}}
            source={require('../../assets/like.png')}
          />
        </Pressable>
      </Animated.View>
      <Animated.View entering={FadeIn.delay(600)}>
        <Text className="text-2xl tracking-widest mb-3 ">{item.strMeal}</Text>
        <Text className="text-xl text-neutral-600 tracking-widest mb-3 ">
          {recipeDetail[0]?.strArea}
        </Text>
      </Animated.View>
      <Animated.View entering={FadeInUp.duration(1000)}>
        <RecipeStats item={item} />
        <Ingredients recipe={recipeDetail[0]} />
      </Animated.View>
    </ScrollView>
  );
};

export default RecipeDetail;

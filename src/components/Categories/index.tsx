import React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {categories} from '../../constants/categories';

type Props = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const Categories: React.FC<Props> = ({activeCategory, setActiveCategory}) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{paddingHorizontal: 20}}
      className="mb-5 space-x-4">
      {categories.map((i, idx) => {
        let activeClass =
          activeCategory === i.strCategory ? 'bg-amber-400' : 'bg-black/10';
        return (
          <Pressable
            key={i.strCategory}
            onPress={() => {
              setActiveCategory(i.strCategory);
            }}>
            <Animated.View
              entering={FadeInDown.duration(500)
                .delay(idx * 100)
                .springify()}
              className={'justify-center items-center'}>
              <View className={'rounded-full p-1 mb-2 ' + activeClass}>
                <Image
                  resizeMode="center"
                  className={'h-20 w-20'}
                  source={{uri: i.strCategoryThumb}}
                />
              </View>
              <Text className={'tracking-widest text-neutral-500 font-medium'}>
                {i.strCategory}
              </Text>
            </Animated.View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default React.memo(Categories);

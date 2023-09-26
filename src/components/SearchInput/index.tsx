import {View, Text, Image, TextInput, Pressable} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
type Props = {
  onPress: () => void;
  value: string;
  onChangeText: (text: string) => void;
};
const SearchInput: React.FC<Props> = ({value, onChangeText, onPress}) => {
  return (
    <Animated.View className="flex-row  bg-gray-200 rounded-full p-1 mb-4 mx-4">
      <TextInput
        onSubmitEditing={onPress}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={'grey'}
        placeholder="Search Recipes"
        className="flex-1 tracking-widest text-neutral-500 font-extrabold pl-6"
      />
      <Pressable
        className="justify-center bg-white/80 shadow-lg rounded-3xl mx-1"
        onPress={onPress}>
        <Image
          className="w-12 h-6"
          resizeMode="contain"
          source={require('../../assets/search.png')}
        />
      </Pressable>
    </Animated.View>
  );
};

export default SearchInput;

import {Text, Image, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import {DrawerHeaderProps, useDrawerProgress} from '@react-navigation/drawer';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const {dispatch} = useNavigation();
  const {themeColor} = useAuth();
  return (
    <ImageBackground
      resizeMode="cover"
      style={{
        height: 110,
        width: 370,
        padding: 10,
        gap: 20,
        alignItems: 'flex-start',
        flexDirection: 'row',
      }}
      tintColor={themeColor}
      source={require('../../assets/wave.png')}>
      <Pressable
        onPress={() => {
          dispatch(DrawerActions.toggleDrawer());
        }}>
        <Image
          tintColor={'#fff'}
          style={{height: 30, width: 30}}
          source={require('../../assets/menu-bar.png')}
        />
      </Pressable>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontVariant: ['small-caps'],
          letterSpacing: 4,
        }}>
        Recipes
      </Text>
    </ImageBackground>
  );
};

export default Header;

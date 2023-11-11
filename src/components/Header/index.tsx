import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ImageBackground, Pressable, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

const Header = () => {
  const {dispatch} = useNavigation();
  const themeColor = useSelector(
    (state: RootState) => state.themeReducer.themeColor,
  );
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

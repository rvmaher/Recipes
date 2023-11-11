import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DrawerNavigator from './DrawerNav';

const MainNav = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainNav;

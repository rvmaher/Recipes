import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import {MainStackScreenParams} from '../typings/navigation';
import RecipeDetail from '../screens/RecipeDetail';
import {SafeAreaView} from 'react-native-safe-area-context';
import useAuth from '../hooks/useAuth';
import Search from '../screens/Search';

const {Navigator, Screen} = createNativeStackNavigator<MainStackScreenParams>();
const MainNav = () => {
  const {user} = useAuth();
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Navigator
          screenOptions={{animation: 'simple_push', headerShown: false}}>
          {!user && <Screen name="Welcome" component={Welcome} />}
          <Screen name="Home" component={Home} />
          <Screen name="RecipeDetail" component={RecipeDetail} />
          <Screen name="Search" component={Search} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainNav;

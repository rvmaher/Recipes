import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@store/store';
import {MainStackScreenParams} from '@typings/navigation';
import Home from '@screens/Home';
import Login from '@screens/Login';
import RecipeDetail from '@screens/RecipeDetail';
import Search from '@screens/Search';
import {login, logout} from '@store/features/authSlice';
import { sleep } from '@utils/helpers';

const {Navigator, Screen, Group} =
  createNativeStackNavigator<MainStackScreenParams>();

const MainNav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.authReducer.user);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async(user) => {
      if (user) {
      // delaying becuase app crashes on modal open in this version on navigation library combo
        await sleep(200)
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar hidden />
        <Navigator
          screenOptions={{animation: 'slide_from_left', headerShown: false}}>
          {(!user && <Screen name="Login" component={Login} />) || (
            <Group>
              <Screen name="Home" component={Home} />
              <Screen name="RecipeDetail" component={RecipeDetail} />
              <Screen name="Search" component={Search} />
            </Group>
          )}
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainNav;

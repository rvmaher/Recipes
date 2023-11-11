import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import Home from '../screens/Home';
import RecipeDetail from '../screens/RecipeDetail';
import Search from '../screens/Search';
import Login from '../screens/Login';
import {login, logout} from '../store/features/authSlice';
import {RootState} from '../store/store';
import {MainStackScreenParams} from '../typings/navigation';

const {Navigator, Screen} = createNativeStackNavigator<MainStackScreenParams>();

const MainNav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.authReducer.user);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
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
        <Navigator
          screenOptions={{animation: 'slide_from_left', headerShown: false}}>
          {/* {!user && <Screen name="Login" component={Login} />} */}
          <Screen name="Home" component={Home} />
          <Screen name="RecipeDetail" component={RecipeDetail} />
          <Screen name="Search" component={Search} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainNav;

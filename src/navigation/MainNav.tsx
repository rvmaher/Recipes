import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
<<<<<<< HEAD
import React, {useEffect} from 'react';
=======
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
// import {MainStackScreenParams} from '../typings/navigation';
import RecipeDetail from '../screens/RecipeDetail';
>>>>>>> e880374 (added some modules and perspective with rn3)
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import Home from '../screens/Home';
import RecipeDetail from '../screens/RecipeDetail';
import Search from '../screens/Search';
<<<<<<< HEAD
import Login from '../screens/Login';
import {login, logout} from '../store/features/authSlice';
import {RootState} from '../store/store';
import {MainStackScreenParams} from '../typings/navigation';
=======
import DrawerNav from './DrawerNav';
>>>>>>> e880374 (added some modules and perspective with rn3)

// const {Navigator, Screen} = createNativeStackNavigator<MainStackScreenParams>();

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
<<<<<<< HEAD
        <Navigator
          screenOptions={{animation: 'slide_from_left', headerShown: false}}>
          {/* {!user && <Screen name="Login" component={Login} />} */}
          <Screen name="Home" component={Home} />
          <Screen name="RecipeDetail" component={RecipeDetail} />
          <Screen name="Search" component={Search} />
        </Navigator>
=======
        <DrawerNav />
>>>>>>> e880374 (added some modules and perspective with rn3)
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainNav;

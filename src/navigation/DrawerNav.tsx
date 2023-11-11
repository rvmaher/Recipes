import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import DrawerBar from '../components/DrawerNavigator';
import Home from '../screens/Home';
import RecipeDetail from '../screens/RecipeDetail';
import Search from '../screens/Search';
import Settings from '../screens/Settings';
import {MainStackScreenParams} from '../typings/navigation';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {RootState} from '../store/store';
import {login, logout} from '../store/features/authSlice';
const Drawer = createDrawerNavigator<MainStackScreenParams>();

const DrawerNavigator = () => {
  const user = useSelector((state: RootState) => state.authReducer.user);
  const dispatch = useDispatch();
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
    <Drawer.Navigator
      drawerContent={props => <DrawerBar props={props} />}
      screenOptions={{
        unmountOnBlur: true,
        swipeEdgeWidth: 200,
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: {
          backgroundColor: 'transparent',
          width: '60%',
        },
        sceneContainerStyle: {},
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="RecipeDetail" component={RecipeDetail} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

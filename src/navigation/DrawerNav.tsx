import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from '../screens/Home';
import Search from '../screens/Search';
import RecipeDetail from '../screens/RecipeDetail';
import DrawerBar from '../components/DrawerNavigator';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
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
      <Drawer.Screen name="Dashboard" component={Home} />
      <Drawer.Screen name="RecipeDetail" component={RecipeDetail} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Favourites" component={Settings} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

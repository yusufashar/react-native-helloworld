import {createStackNavigator} from 'react-navigation-stack';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Account from '../component/akun/akun';
import Account1 from '../component/akun/akun1';
import Home from '../component/home/home';
import Home1 from '../component/home/home1';
import Category from '../component/kategori/kategori';
import Category1 from '../component/kategori/kategori1';
import Introduction from '../component/introduction/intro';

import Login from '../component/auth/login';
import Register from '../component/auth/register';
import React from 'react';

const HomePage = createAppContainer(
  createStackNavigator(
    {
      home: Home,
      home1: Home1,
    },
    {
      initialRouteName: 'home',
      headerMode: 'none',
      defaultNavigationOptions: {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  ),
);

const CategoryPage = createAppContainer(
  createStackNavigator(
    {
      category: Category,
      category1: Category1,
    },
    {
      initialRouteName: 'category',
      headerMode: 'none',
      defaultNavigationOptions: {
        title: 'Category',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  ),
);

const AccountPage = createAppContainer(
  createStackNavigator(
    {
      account: Account,
      account1: Account1,
    },
    {
      initialRouteName: 'account',
      headerMode: 'none',
      defaultNavigationOptions: {
        headerVisible: false,
        title: 'Account',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  ),
);

const BottomNavigation = createBottomTabNavigator(
  {
    Home: HomePage,
    Pesanan: CategoryPage,
    Account: AccountPage,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          return (
            <Image
              source={require('../assets/menu_off_gade.png')}
              style={{width: 25, height: 25}}
            />
          );
        } else if (routeName === 'Pesanan') {
          // iconName = `bars${focused ? '' : '-outline'}`;
          return (
            <Image
              source={require('../assets/pesanan.png')}
              style={{width: 25, height: 25}}
            />
          );
        } else if (routeName === 'Account') {
          return (
            <Image
              source={require('../assets/profile_off.png')}
              style={{width: 25, height: 25}}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      initialRouteName: 'Home',
      activeTintColor: '#4e82ff',
      inactiveTintColor: '#000',
      activeBackgroundColor: '#d8dddd',
      inactiveBackgroundColor: '#fff',
      labelStyle: 'bold',
      style: {
        backgroundColor: '#fff',
      },
    },
  },
);

export const AppNavigation = createAppContainer(
  createSwitchNavigator({
    Login: Login,
    Register: Register,
    Introduction: Introduction,
    HomeNavigation: BottomNavigation,
  }),
);

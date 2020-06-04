import React, {Component} from 'react';
import HomeStack from './homeStack';
import Second from '../screen/second';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import SideBar from '../shared/index';

const DrawerNavigation = createDrawerNavigator(
  {
    HomeStack: {
      screen: HomeStack,
    },
    Second: {
      screen: Second,
    },
  },
  {
    initialRouteName: 'HomeStack',
    activeTintColor: 'red',
    drawerType: 'front',
    drawerBackgroundColor: '#9090',
    contentComponent: (props) => <SideBar activeTintColor="red" {...props} />,
  },
);

// const Drawer = createDrawerNavigator({AppContainer});
export default createAppContainer(DrawerNavigation);

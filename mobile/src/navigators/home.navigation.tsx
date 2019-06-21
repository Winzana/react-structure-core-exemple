import React from 'react';
import Login from '@screens/login';
import { createStackNavigator } from 'react-navigation';

export const HomeNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
});

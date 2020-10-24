import React from 'react';

import { NavigationContainer, } from '@react-navigation/native';

import TopTabs from './TabNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TopTabs initialRouteName='HomeScreen' />
    </NavigationContainer>
  );
};

export default AppNavigator;
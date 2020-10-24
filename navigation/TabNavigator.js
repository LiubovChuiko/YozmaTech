import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen, SecondScreen } from '../screens';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SecondScreen} />
    </Tab.Navigator>
  );
};

export default TopTabs;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';

const Tab = createBottomTabNavigator();

const ExemploTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Page1" component={Page1} />
      <Tab.Screen name="Page2" component={Page2} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ExemploTab;

import React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';

const Drawer = createDrawerNavigator();

const HomeMenu = ({ navigation }) => {
  return (
    <View>
      <Button title="Menu" onPress={() => navigation.openDrawer()} />
    
      <Drawer.Navigator>
        <Drawer.Screen name="Page1" component={Page1} />
        <Drawer.Screen name="Page2" component={Page2} />
      </Drawer.Navigator>
    </View>
  );
};

export default HomeMenu;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import ConceitoComponente from './ConceitoComponente';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hello from './Pages/Hello/Hello';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import Imc from './Pages/Imc/Index';

const Stack = createStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Hello" component={Hello} />
        <Stack.Screen  name="Imc" component={Imc} />
        <Stack.Screen  name="Page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    justifyContent: 'center',
  },
});

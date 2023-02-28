import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import ConceitoComponente from './ConceitoComponente';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hello from './Pages/Hello/Hello';
import Imc from './Pages/Imc/Index';
import JokesList from './Pages/JokesList/Index';

const Stack = createStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Hello" component={Hello} />
        <Stack.Screen  name="Imc" component={Imc} />
        <Stack.Screen  name="JokesList" component={JokesList} />
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

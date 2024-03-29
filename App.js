import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import ConceitoComponente from './ConceitoComponente';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hello from './Pages/Hello/Hello';
import Imc from './Pages/Imc/Index';
import JokesList from './Pages/JokesList/Index';
import NewUser from './Pages/NewUser/Index';
import Login from './Pages/Login/Index';
import Home from './Pages/Home/Index';
import ExemploTab from './Pages/ExemploTab/Index';
import HomeMenu from './Pages/HomeMenu/Index';
import NotificationTest from './Pages/NotificationTest/Index';



const Stack = createStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
      <Stack.Navigator>          
        <Stack.Screen  name="Login" component={Login} />        
        <Stack.Screen  name="NotificationTest" component={NotificationTest} />      
        <Stack.Screen  name="Hello" component={Hello} />
        <Stack.Screen  name="Imc" component={Imc} />
        <Stack.Screen  name="JokesList" component={JokesList} />
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="NewUser" component={NewUser} />
        <Stack.Screen  name="ExemploTab" component={ExemploTab} />
        <Stack.Screen  name="HomeMenu" component={HomeMenu} />
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

import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React, {useState} from 'react';

// importações react-navigation
  // Componente para envolver todo o aplicativo
  import { NavigationContainer } from '@react-navigation/native';

  //Componente para a contrução do DrawerMenu
  import { createDrawerNavigator } from '@react-navigation/drawer';
import Page1 from '../../Pages/Page1/Page1';
import Page2 from '../../Pages/Page2/Page2';


const Drawer = createDrawerNavigator();

export default function Menu(){
  return(
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Page1"
        drawerStyle={{
          backgroundColor: "#313131",
          paddingVertical: 20
        }}
        drawerContentOptions={{
          activeBackgroundColor: "#fff",
          inactiveTintColor: "#fff"
        }}>

          
        <Drawer.Screen 
            name="Page1" 
            component={Page1} 
            options={
              {
                drawerLabel: (({focused}) => <Text style={{color: focused ? '#313131' : '#fff' }}>Primeira Tela</Text>),
                drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name="Page1" />)
              }
            } 
        />
        <Drawer.Screen 
          name="Page2" 
          component={Page2} 
          options={
            {
              drawerLabel: (({focused}) => <Text style={{color: focused ? '#313131' : '#fff' }}>Segunda Tela</Text>),
              drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name="Page2" />)
            }
          }
         
          />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
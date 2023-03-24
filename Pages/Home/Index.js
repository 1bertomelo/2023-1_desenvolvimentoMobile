import { StyleSheet, Text, View, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native'
import FlatListJokes from '../../Components/FlatListJokes/Index';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../styles/colors';
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View>
              <FlatListJokes />
          </View> 
      </KeyboardAvoidingView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'red', //colors.background,
    alignItems: 'center',
  },

})
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppForm from './AppForm';

export default function App() {
  return (
    <View style={styles.container}>
    <AppForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
    justifyContent: 'center',
  },
});

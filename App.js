import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppForm from './AppForm';
import ConceitoComponente from './ConceitoComponente';

export default function App() {
  return (
    <View style={styles.container}>
    <ConceitoComponente />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';


export default function ConceitoComponente() {
  const [idade, setIdade] = useState('');
  const [resposta, setResposta] = useState('');

  function handleButtonPress(){ 
    if(idade >= 18)
      setResposta('Você é maior de idade!');
    else
      setResposta('Você é menor de idade!');
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exemplo 01</Text>
      <View style={styles.inputContainer}> 
        <TextInput 
          style={styles.input}  
          placeholder="Sua idade" 
          keyboardType={'numeric'}
          onChangeText={ idade => setIdade(idade)} 
          clearButtonMode="always" /> 
        <TouchableOpacity style={styles.button}  onPress={handleButtonPress}> 
          <Text style={styles.buttonText}>Analisar</Text> 
        </TouchableOpacity> 
        
       <Text style={styles.textResult}>{resposta}</Text>
      </View>
      
      <StatusBar style="light" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#D93600',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    height: '80%'

  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textResult: {
    color: '#000',
    fontWeight: 'bold',
    textAlign : 'center'
  }
});

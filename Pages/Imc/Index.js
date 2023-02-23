import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';


export default function Imc() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);
  const [flMostraResultado, setMostraResultado] = useState(false);
  const [resposta, setResposta] = useState('');
  const [emotion, setEmotion] = useState('');

  let tabelaIMC = [];
  tabelaIMC[0] = { min: 0, max: 18.5, descricao: 'Abaixo peso normal', emotion:'😒'};
  tabelaIMC[1] = {min:18.5,max:24.9, descricao: 'Peso normal', emotion:'😁'};
  tabelaIMC[2] = {min:24.9,max:29.9, descricao: 'Excesso de peso', emotion:'😒'};
  tabelaIMC[3] = {min:29.9,max:34.9, descricao: 'Obsesidade I', emotion:'😒'};
  tabelaIMC[4] = {min:34.9,max:39.9, descricao: 'Obsesidade II', emotion:'😒'};
  tabelaIMC[5] = {min:39.9,max:99.9, descricao: 'Obsesidade III', emotion:'😒'};


  function handleButtonPress(){ 
    setMostraResultado(true);
    let calculoImc = peso / ((altura/100) **2);
    setImc(calculoImc.toFixed(2));
    let resultadoImc = tabelaIMC.find( item => calculoImc >= item.min && calculoImc < item.max);
    setResposta(resultadoImc.descricao);
    setEmotion(resultadoImc.emotion);

  } 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC!</Text>
      <View style={styles.inputContainer}> 
        <TextInput 
          style={styles.input}  
          placeholder="Seu peso (KG)" 
          keyboardType={'numeric'}
          onChangeText={ peso => setPeso(peso)} 
          clearButtonMode="always" 
        /> 
         <TextInput 
          style={styles.input}  
          placeholder="Sua altura (cm)" 
          keyboardType={'numeric'}
          onChangeText={ altura => setAltura(altura)} 
          clearButtonMode="always" 
        /> 
        <TouchableOpacity style={styles.button}  onPress={handleButtonPress}> 
          <Text style={styles.buttonText}>CALCULAR</Text> 
        </TouchableOpacity> 
         
        <Text style={styles.textResponse}>{flMostraResultado ? imc : ''}</Text>
        <Text style={styles.textResponse}>{flMostraResultado ? resposta : ''}</Text>
        <Text style={styles.textResponse}>{flMostraResultado ? emotion : ''}</Text>
      </View>
      <StatusBar style="light" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    marginTop: 30,
    width: '90%',
    height: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
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
  textResponse :{
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

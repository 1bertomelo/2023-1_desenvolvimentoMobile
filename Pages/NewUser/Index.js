import React, {useState} from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    FlatList,
    Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
//import api from '../../Services/api';

import MyButton  from '../../Components/MyButton/Index';
import LinkButton from '../../Components/LinkButton/Index';

import colors from '../../styles/colors';
//import Loading from '../../Components/Loading/Loading';

import { SafeAreaView } from 'react-native-safe-area-context';

const eye = 'eye';
const eyeOff = 'eye-off';



export default function NewUser() {
 
    const [flShowPass, setShowPass] =  useState(false);
    const [iconPass, setIconPass] =  useState(eye);

    const [txtName, setName] = useState('')
    const [txtDocument, setDocument] = useState('')
    const [txtEmail, setEmail] = useState('')
    const [txtPassword, setPassword] = useState('')
    const [txtPasswordConfirm, setPasswordConfirm] = useState('')
    const navigation = useNavigation();
 //   const [flLoading, setLoading] = React.useState(false)
    const [lstErrors, setListErrors] = useState([]);

    

    function handleChangeIcon() {
         let icone = iconPass == eye ? eyeOff : eye;
         let flShowPassAux = !flShowPass;
         setShowPass(flShowPassAux);
         setIconPass(icone);
     }
 
     function handleChangeIconConfirm() {
        let icone = iconPass == eye ? eyeOff : eye;
         let flShowPassAux = !flShowPass;
         setShowPass(flShowPassAux);
         setIconPass(icone);
     }
 
     function handlePostNewStudent() {
        camposPrenchidos();

     }
 
     function camposPrenchidos(){
        let validacoes = [];
        let retorno = true;
        if (txtName.trim() === '') {
            validacoes.push('Campo Nome é obrigatório');   
            retorno = false;         
        }
        if (txtEmail.trim() === '') {
            validacoes.push('Campo Email é obrigatório');            
            retorno = false;         
        }
        setListErrors(validacoes);
        return retorno;
     }
 
 /*    function navigateToBack() {
         navigation.goBack();
     }
 */
     function navigateToBack() {
         navigation.goBack();
     }
 
 
   return (
     <SafeAreaView style={styles.container}>
     <Text style={styles.textTitle}>Preencha seus dados!</Text>
     <TextInput
         style={styles.textInput}
         placeholder="Nome"
         onChangeText={text => setName(text)}
         maxLength={50}
         value={txtName}
     />
     <TextInput
         style={styles.textInput}
         placeholder="Cpf"
         onChangeText={text => setDocument(text)}
         maxLength={11}
         value={txtDocument}
     />
     <TextInput
         style={styles.textInput}
         placeholder="Email"
         onChangeText={text => setEmail(text)}
         maxLength={50}
         value={txtEmail}
     />
 
    
<View style={styles.passwordContainer}>
         <TextInput
             style={styles.textInputPassword}
             placeholder="Senha"
             onChangeText={text => setPassword(text)}
             value={txtPassword}
             secureTextEntry={flShowPass}
             maxLength={11}
         />
         <Feather
             style={styles.iconEye}
             name={iconPass}
             size={28}
             color={colors.redButton}
             onPress={handleChangeIcon}
         />
     </View>
     <View style={styles.passwordContainer}>
         <TextInput
             style={styles.textInputPassword}
             placeholder="Confirmar Senha"
             onChangeText={text => setPasswordConfirm(text)}
             value={txtPasswordConfirm}
             secureTextEntry={flShowPass}
             maxLength={11}
         />
         <Feather
             style={styles.iconEye}
             name={iconPass}
             size={28}
             color={colors.redButton}
             onPress={handleChangeIconConfirm}
         />
     </View>

  <FlatList
 
         data={lstErrors}
         keyExtractor={error => error}
         showsVerticalScrollIndicator={false}
         renderItem={({ item }) => (
             <Text>{item}</Text>
 
         )}
     />
     <MyButton title='Salvar' onPress={handlePostNewStudent} />
        
     <LinkButton title='Voltar'
                onPress={navigateToBack}
            />
 </SafeAreaView>
 
 );
 }
 
 
 const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: colors.background,
 alignItems: 'center',
 justifyContent: 'center'
 },
 textTitle: {
 color: 'red',
 fontSize: 28,
 marginBottom: 8
 },
 textInput: {
 height: 40,
 borderColor: colors.gray,
 borderRadius: 8,
 borderWidth: 1,
 width: '70%',
 marginBottom: 16,
 paddingHorizontal: 8
 },
 textInputPassword: {
 height: 40,
 borderWidth: 0,
 width: '70%',
 marginBottom: 16,
 paddingHorizontal: 8
 },
 buttonIn: {
 backgroundColor: colors.redButton,
 borderRadius: 8,
 height: 50,
 width: '70%',
 justifyContent: 'center',
 alignItems: 'center'
 },
 buttonTextIn: {
 color: '#FFF',
 fontSize: 18,
 fontWeight: 'bold'
 },
 passwordContainer: {
 marginBottom: 16,
 height: 40,
 borderColor: '#dcdce6',
 borderRadius: 8,
 borderWidth: 1,
 width: '70%',
 flexDirection: 'row',
 justifyContent: 'space-between'
 },
 iconEye: {
 paddingHorizontal: 8,
 marginTop: 6
 },
 });
import React, {useState} from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import api from '../../ApiService/api';

import MyButton  from '../../Components/MyButton/Index';
import LinkButton from '../../Components/LinkButton/Index';

import colors from '../../styles/colors';
//import Loading from '../../Components/Loading/Loading';

import AsyncStorage from '@react-native-async-storage/async-storage';

const eye = 'eye';
const eyeOff = 'eye-off';



export default function Login() {

const [flShowPass, setShowPass] =  useState(false);
const [iconPass, setIconPass] =  useState(eye);
const [txtLogin, setLogin] = useState('')
const [txtSenha, setSenha] = useState('')
const navigation = useNavigation();
const [flLoading, setLoading] = useState(false)

function handleChangeIcon() {
    let icone = iconPass == eye ? eyeOff : eye;
    let flShowPassAux = !flShowPass;
    setShowPass(flShowPassAux);
    setIconPass(icone);
}

async function navigateToHome() {

    if (txtLogin.trim() === '') {
        alert('Campo login é obrigatório');
        return;
    }
    if (txtSenha.trim() === '') {
        alert('Campo senha é obrigatório');
        return;
    }
  //  setLoading(true);

    if(txtLogin == "h1" && txtSenha == "123"){
        await AsyncStorage.setItem('@nomeApp:userName', txtLogin);
        navigation.navigate('JokesList');    
    } else {
        alert('Usuario e/ou senha inválido!');
        return;
    }
  //  setLoading(false);
}

function navigateToNewUser() {
    navigation.navigate('NewUser');
}
/*if (flLoading) {
    return (<Loading />);
}*/

return (
    <View style={styles.container}>
        <Text style={styles.textTitle}>Seja bem vindo!</Text>
        <TextInput
            style={styles.textInput}
            placeholder="Login"
            onChangeText={text => setLogin(text)}
            value={txtLogin}
        
        />
        <View style={styles.passwordContainer}>
            <TextInput
                style={styles.textInputPassword}
                placeholder="Senha"
                onChangeText={text => setSenha(text)}
                value={txtSenha}
                secureTextEntry={flShowPass}
            />
            <Feather
                style={styles.iconEye}
                name={iconPass}
                size={28}
                color={colors.redButton}
                onPress={handleChangeIcon}
            />
        </View>

        <MyButton title='Entrar' onPress={navigateToHome}

        />

        <LinkButton title='Inscrever-se'
            onPress={navigateToNewUser}
        />

    </View>

);
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
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
import { StyleSheet, Text, View, TextInput, TouchableOpacity,   SafeAreaView,
    KeyboardAvoidingView,
    FlatList } from 'react-native';
import React, {useState, useEffect } from 'react';
import colors from '../../styles/colors';
import OptionButton from '../../Components/OptionButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../ApiService/api';

export default function JokesList() {
    const [userName, setUserName] = useState('');
    const [jokesList, setJokesList] = useState([]);

    async function loadStoreUserName() {
        const user = await AsyncStorage.getItem('@nomeApp:userName') || '';
        setUserName(user);
    }

    async function loadJokes(){
       await api.get('/Jokes').then((response) => {
             setJokesList(response.data);
          });
    }
    
    useEffect(() => {
        loadJokes();   
        loadStoreUserName();
    }, []);

    const jokeArray = [
        {
            id: 1,
            title: 'Trocadilho 1',
        },
        {   
            id: 2,
            title: 'Trocadilho 2',
        },
        {
            id: 3,
            title: 'Trocadilho 3',
        },
        {
            id: 4,
            title: 'Trocadilho 4',
        }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.header}>
                   
                    <Text style={styles.question}>
                        {userName} escolha um e divirta-se:
                    </Text>
                </View>
                <View style={styles.jokeListCss}>
                    <FlatList
                        data={jokesList}
                        renderItem={({ item }) => (
                            <OptionButton title={item.title} />
                        )}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        contentContainerStyle={styles.itemJokeCSS}
                        keyExtractor={item => item.id}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 20
    },
    question: {
        fontSize: 17,
        color: colors.heading,
        textAlign: 'center'
    },
    jokeListCss: {

    },
    itemJokeCSS: {

    }
});
import { StyleSheet, Text, View, TextInput, TouchableOpacity,   SafeAreaView,
    KeyboardAvoidingView,
    FlatList } from 'react-native';
import React, {useState} from 'react';
import colors from '../../styles/colors';
import OptionButton from '../../Components/OptionButton';


export default function JokesList() {

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
                        Escolha um Trocadilho e divirta-se:
                    </Text>
                </View>
                <View style={styles.jokeListCss}>
                    <FlatList
                        data={jokeArray}
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
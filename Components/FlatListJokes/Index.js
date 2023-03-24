import React, { useState } from 'react';
import { View, Text, Image, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import LinkButton
 from '../LinkButton/Index';
 import colors from '../../styles/colors';
 import { useNavigation } from '@react-navigation/core';
 
const data = [
  { id: '1', nome: 'Trocadilho 1', foto: 'https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head.png' },
  { id: '2', nome: 'Trocadilho 2', foto: 'https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head.png' },
  { id: '3', nome: 'Trocadilho 3', foto: 'https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head.png' },
  { id: '4', nome: 'Trocadilho 4', foto: 'https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head.png' },
  { id: '5', nome: 'Trocadilho 5', foto: 'https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head.png' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  item: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  foto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nome: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  searchInput: {
    height: 40,
    borderColor: colors.gray,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8
  }
});

function navigateToNewUser() {
  navigation.navigate('NewUser');
}

const noResultsComponent = (
  <View style={[styles.item, { justifyContent: 'center', height: 50 }]}>
    <Text style={{ fontStyle: 'italic' }}>Nenhum resultado encontrado</Text>
  </View>
);

const FlatListJokes = () => {

  const navigation = useNavigation();


  const [search, setSearch] = useState('');

  const filteredData = data.filter((item) =>
    item.nome.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <Item nome={item.nome} foto={item.foto} />
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Digite um nome.."
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
       {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }} />}
        />
      ) : (
        noResultsComponent
      )}
  

    </View>
  );
};


const Item = ({ nome, foto }) => (
  
  <View style={styles.item}>
    <Image source={{ uri: foto }} style={styles.foto} />
    <View>
      <Text style={styles.nome}>{nome}</Text>
    </View>
    <LinkButton title='Ver'
            onPress={navigateToNewUser}
        />
  </View>
);

export default FlatListJokes;

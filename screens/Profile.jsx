import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Button, StyleSheet } from 'react-native';

const Profile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    // Recupera os dados do usuário do AsyncStorage ao carregar o componente
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const storedUsers = await AsyncStorage.getItem('userData');
      if (storedUsers) {
        const usersData = JSON.parse(storedUsers);
        if (usersData.length > 0) {
          const { name: storedName, address: storedAddress } = usersData[usersData.length - 1];
          setName(storedName);
          setAddress(storedAddress);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    // Navega de volta para a página de login
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{name}</Text>
      <Text style={styles.label}>Endereço:</Text>
      <Text style={styles.value}>{address}</Text>
      <Button title="Voltar ao Login" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Profile;
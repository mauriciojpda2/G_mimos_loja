import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'


const Profile = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const storedCurrentUser = await AsyncStorage.getItem('currentUser');
        if (storedCurrentUser) {
          const currentUser = JSON.parse(storedCurrentUser);
          setUserData(currentUser);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
  }, []);

  const handleLogout = async () => {
    try {
      // Navega de volta para a tela de login
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
      <TouchableOpacity onPress={handleLogout}>
        <Ionicons name='chevron-back-circle' size={30}/>
        <Text>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Perfil</Text>
      {userData ? (
        <View>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{userData.name}</Text>
          <Text style={styles.label}>Endereço:</Text>
          <Text style={styles.value}>{userData.address}</Text>
        </View>
      ) : (
        <Text>Dados do usuário não encontrados.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    width: '100%',
    
  },
  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 90,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 20,
    
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 44,
    width: 350,
    zIndex: 999,
    marginLeft: 20,

  }
});

export default Profile;

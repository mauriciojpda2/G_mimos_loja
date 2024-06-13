import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants';
import bcrypt from 'bcryptjs';


const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedUsers = await AsyncStorage.getItem('userData');
      const usersData = storedUsers ? JSON.parse(storedUsers) : [];

      const user = usersData.find(user => user.email === email);
      if (user) {
        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (passwordMatch) {
          navigation.navigate('Bottom Navigator');
          alert('Login realizado com sucesso!');
        } else {
          alert('Credenciais incorretas!');
        }
      } else {
        alert('Credenciais incorretas!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.imgStyle}/>
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
        <View style={styles.btnContainer}>
        <Button title="Entrar" onPress={handleLogin} color={COLORS.verde} />
        </View>
        <View style={styles.btnContainer1}>
        <Button title="Registrar" onPress={handleRegister} color={COLORS.verde}  />
        </View>
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
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
    color: COLORS.preto,
   
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    borderRadius: 8
  },
  btnContainer: {
    marginTop: 10,
    width: '100%',
    marginBottom: 20,
  },
  btnContainer1: {
    width: '100%',
  },
  imgStyle: {
    width: '110%',
    marginBottom: 10,
  }
});

export default Login;
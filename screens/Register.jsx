import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../constants';
import crypto from 'crypto-js';


const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    setError('');

    console.log('Trying to register...');
    
    try {
      if (!name || !email || !password || !confirmPassword || !address) {
        throw new Error('Por favor, preencha todos os campos.');
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        throw new Error('Por favor, insira um email válido.');
      }

      if (password !== confirmPassword) {
        throw new Error('As senhas não coincidem!');
      }

      const hashedPassword = hashPassword(password);

      registerUser(hashedPassword);
    } catch (error) {
      console.error('Erro ao realizar o cadastro:', error.message);
      setError(error.message);
    }
  };

  const hashPassword = (password) => {
    return crypto.SHA256(password).toString();
  };

  const registerUser = async (hashedPassword) => {
    try {
      const storedUsers = await AsyncStorage.getItem('userData');
      const usersData = storedUsers ? JSON.parse(storedUsers) : [];

      const existingUser = usersData.find(user => user.email === email);
      if (existingUser) {
        throw new Error('E-mail já cadastrado!');
      }

      const newUser = {
        name,
        email,
        password: hashedPassword,
        address,
      };

      usersData.push(newUser);
      await AsyncStorage.setItem('userData', JSON.stringify(usersData));

      console.log('Registration successful!');
      alert('Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao realizar o cadastro:', error.message);
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name='chevron-back-circle' size={30}/>
        </TouchableOpacity>
        </View>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
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
      <TextInput
        placeholder="Confirme a senha"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.btnStyle}>
      <Button title="Registrar" onPress={handleRegister} color={COLORS.verde}/>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    borderRadius: 8,
    color: COLORS.preto
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 44,
    width: '100%',
    zIndex: 999  
  },
  btnStyle: {
    width: '100%',
  }
});

export default Register;
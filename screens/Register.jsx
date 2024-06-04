import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      const storedUsers = await AsyncStorage.getItem('userData');
      const usersData = storedUsers ? JSON.parse(storedUsers) : [];

      const existingUser = usersData.find(user => user.email === email);
      if (existingUser) {
        alert('E-mail já cadastrado!');
        return;
      }

      const newUser = {
        email,
        password,
      };

      usersData.push(newUser);
      await AsyncStorage.setItem('userData', JSON.stringify(usersData));

      alert('Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
            <TextInput
        placeholder="Endereco"
        value={endereco}
        onChangeText={setEndereco}
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
      <Button title="Registrar" onPress={handleRegister} />
      <Button title="Voltar" onPress= {() => navigation.navigate('Login')}/>
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
  },
});

export default Register;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Perfil</Text>
    </View>
  );
};

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carrinho</Text>
    </View>
  );
};

const ProductItem = ({ item }) => {
  return (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
    </View>
  );
};

const productsData = [
  { id: '1', name: 'Produto 1', price: 19.99 },
  { id: '2', name: 'Produto 2', price: 24.99 },
  { id: '3', name: 'Produto 3', price: 34.99 },
  { id: '4', name: 'Produto 4', price: 14.99 },
  { id: '5', name: 'Produto 5', price: 29.99 },
  { id: '6', name: 'Produto 6', price: 39.99 },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backButtonText}>Sair</Text>
      </TouchableOpacity>
      <FlatList
        data={productsData}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productsList}
      />
    </View>
  );
};


const LoggedScreen = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Carrinho" component={CartScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.button}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

const CadastroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <TextInput style={styles.input} placeholder="Confirme sua Senha" />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.button}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={LoggedScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 40,
  },
  text: {
    fontSize: 24,
  },
  heading: {
    fontSize: 32,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  button: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 18,
    color: 'blue',
  },
  productsList: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  productItem: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
});

export default App;



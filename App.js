import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart, Login, ProductDetails, Register } from './screens';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name='Login'
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Bottom Navigator'
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

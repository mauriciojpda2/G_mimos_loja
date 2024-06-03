import { SafeAreaView, StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button
        title="ir para login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="ir para Register"
        onPress={() => navigation.navigate('Register')}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
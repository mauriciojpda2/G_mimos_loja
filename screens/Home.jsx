import { SafeAreaView, StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './headings.style'
import { Ionicons } from "@expo/vector-icons"
import COLORS from '../../constants'

const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Produtos</Text>
        <TouchableOpacity>
            <Ionicons name='grid' size={24} color={COLORS.verde}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings


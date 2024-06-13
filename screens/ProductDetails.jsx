import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import styles from './productDetails.style'
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../constants'

const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name='chevron-back-circle' size={30}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name='heart' size={30} color={COLORS.verde}/>
        </TouchableOpacity>
      </View>
      <Image 
      source={{uri: "https://bythiti.com.br/wp-content/uploads/2023/09/32-1-e1695336830946.jpg"}}
      style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
          <Text style={styles.price}>R$ 50,00</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProductDetails


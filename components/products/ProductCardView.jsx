import { TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import { Ionicons } from "@expo/vector-icons"
import COLORS from '../../constants'
import { useNavigation } from '@react-navigation/native'


const ProductCardView = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                  source={{uri:item.uri}}
                  style={styles.image}
                />
            </View>
            <View style={styles.details}>
              <Text style={styles.title} numberOfLines={1}>Produto Teste</Text>
              <Text style={styles.supplier} numberOfLines={1}>Produto</Text>
              <Text style={styles.price}>R$50</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add-circle" size={35} color={COLORS.rosa}/>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView


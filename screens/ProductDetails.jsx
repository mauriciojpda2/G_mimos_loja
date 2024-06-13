import { Text, TouchableOpacity, View, Image, Linking } from 'react-native'
import React from 'react'
import styles from './productDetails.style'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import COLORS from '../constants'


const ProductDetails = ({navigation}) => {
  const text = 'Mensagem Genérica de venda de produto X';
  const phone = '5563992523241'

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
            <Text style={styles.price}>R$ 55,00</Text>
          </View>

          </View>

            <View style={styles.ratingRow}>
                <View style={styles.rating}>
                  {[1,2,3,4,5].map((index) =>(
                  <Ionicons
                  key={index}
                  name='star'
                  size={24}
                  color="gold"
                  />
                ))}
                <Text style={styles.ratingText}>(5.0)</Text>
               </View>
               
          </View>
          <View style={styles.descriptionWraper}>
              <Text style={styles.description}>Descrição do Produto</Text>
              <Text style={styles.descText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed architecto, recusandae reiciendis aperiam fuga non dicta nam exercitationem necessitatibus quam ex repellat mollitia ad asperiores similique a? Facere, veniam possimus.
              </Text>

          </View>  

          <View style={{marginBotton: 12}}>
                <View style={styles.location}>
                  <View style={{ flexDirection: 'row'}}>
                    <Ionicons name='location-outline' size={20}/>
                    <Text>  Campo Grande</Text>
                  </View>
                  <View style={{ flexDirection: 'row'}}>
                    <MaterialCommunityIcons name="truck-delivery-outline" size={20}/>
                    <Text>  Entrega Grátis</Text>
                  </View>
                </View>
                
          </View>
          <View style={styles.cartRow}>
              <TouchableOpacity onPress={()=>{
                Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`)
              }} 
              style={styles.cartBtn}>
                  <Text style={styles.cartText}>  COMPRE AGORA</Text>
              </TouchableOpacity>
          </View>   
      </View>
    </View>
  )
}

export default ProductDetails


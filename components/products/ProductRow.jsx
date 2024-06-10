import { FlatList, Text, View } from 'react-native'
import React from 'react'
import ProductCardView from './ProductCardView'
import styles from "./productRow.style"

const ProductRow = () => {
  const products = [{id:1, uri:"https://bythiti.com.br/wp-content/uploads/2023/09/32-1-e1695336830946.jpg"},
                   {id:2, uri:"https://static.ideallar7.com.br/public/ideallar7/imagens/produtos/garrafa-termica-inox-650b1a95339e8.jpg"},
                   {id:3, uri:"https://bythiti.com.br/wp-content/uploads/2023/09/32-1-e1695336830946.jpg"},
                   {id:4, uri:"https://bythiti.com.br/wp-content/uploads/2023/09/32-1-e1695336830946.jpg"},
  ]

  return (
    <View style={styles.container}> 
        <FlatList
        data={products}
        renderItem={({item}) => <ProductCardView item={item}/>}
        horizontal
        contentContainerStyle={{columnGap: 12}}
        />
    </View>
  )
}

export default ProductRow


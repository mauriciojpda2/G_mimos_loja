import { FlatList, Text, View } from 'react-native'
import React from 'react'
import ProductCardView from './ProductCardView'
import styles from "./productRow.style"

const ProductRow = () => {
  const products = [{id:1, uri:"https://bythiti.com.br/wp-content/uploads/2023/09/32-1-e1695336830946.jpg"},
                   {id:2, uri:"https://static.ideallar7.com.br/public/ideallar7/imagens/produtos/garrafa-termica-inox-650b1a95339e8.jpg"},
                   {id:3, uri:"https://acdn.mitiendanube.com/stores/002/215/718/products/img_20221227_1758571-91580b0362a489358916889331945431-1024-1024.jpg"},
                   {id:4, uri:"https://down-br.img.susercontent.com/file/c852b2186de1de337cfbe808388e936d"},
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


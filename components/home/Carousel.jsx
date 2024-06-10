import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react';
import COLORS from '../../constants';
import Carousel from 'react-native-reanimated-carousel';


const width = Dimensions.get('window').width;

const CarouselComponent = () => {
    const slides = [
        "https://www.xbzbrindes.com.br/img/categorias/tema/bannermob_garrafas%20termicas%201014x535.jpg",
        "https://i0.wp.com/www.eternizarbrindes.com.br/wp-content/uploads/2019/02/banner-canecas-de-porcelana-1.jpg?ssl=1",
        "https://www.doistercos.com.br/wp-content/uploads/2023/07/FotoDivulgacao_SaboariaNatura02.jpg",
    ]


  return (
    <View style={styles.carouselContainer}>
      <Carousel
                loop
                width={width}
                height={width / 2.4}
                autoPlay={true}
                autoPlayInterval={2000}
                data={slides}
                scrollAnimationDuration={1500}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            marginHorizontal: 15,
                        }}
                    >
                    <Image
                        style={styles.logo}
                        source={{
                            uri: item,
                          }}
                    />
                    </View>
                )}
            />

    </View>
  )
}

export default CarouselComponent

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center",
        marginHorizontal: 100,
        justifyContent: "center",
    },
    logo: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        
    },
})
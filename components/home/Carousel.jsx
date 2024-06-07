import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react';
import COLORS from '../../constants';
import Carousel from 'react-native-reanimated-carousel';


const width = Dimensions.get('window').width;

const CarouselComponent = () => {
    const slides = [
        "https://www.colorhexa.com/7fcdc4.png",
        "https://a-static.mlcdn.com.br/450x450/garrafa-termica-grande-mae-garrafa-presente-dia-da-maes-zona-criativa/rockandbitspresentescriativos/16048636465/b3ab323c7c5a49139b044b0e05195d30.jpeg",
        "https://www.colorhexa.com/7fcdc4.png",
    ]


  return (
    <View style={styles.carouselContainer}>
      <Carousel
                loop
                width={width}
                height={width / 2}
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
        justifyContent: "center"
    },
    logo: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        
    },
})
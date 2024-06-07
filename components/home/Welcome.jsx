import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import COLORS from '../../constants'
import {Feather, Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const Welcome = () => {
  const navigation = useNavigation();
  return (
  <View>
        <View style={styles.container}>
          <Text style={styles.welcomeTxt(COLORS.preto, 12)}>
            {" "}
            Encontre aqui
          </Text>

          <Text style={styles.welcomeTxt(COLORS.rosa, 0)}>
            {" "}
            Os Melhores presentes
          </Text>
        </View>

        <View style={styles.searchContainer }>
            <TouchableOpacity>
              <Feather name="search" size={24} style={styles.searchIcon}/>
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
              <TextInput
              style={styles.searchInput}
              value=""
              onPress={()=>navigation.navigate("Search")}
              placeholder="O Que está procurando?"
              />
            </View>
            <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="camera-outline" size={24}/>
          </TouchableOpacity>
        </View>

        </View>
        
  </View>
  )
}

export default Welcome
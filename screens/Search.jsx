import { View, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from "./search.style";
import {Feather, Ionicons} from '@expo/vector-icons';
import COLORS from '../constants';


const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
          name="camera-outline" 
          size={24}
          style={styles.searchIcon}
          />
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onPress={() => {}}
            placeholder="O Que está procurando?"
          />

        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather 
            name="search" 
            size={24}
            color={COLORS.preto}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
;
export default Search;


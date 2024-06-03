import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Cart } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import  Colors  from "../constants/index";


const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70,
    }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? Colors.rosa : Colors.verde}
                />
            }
        }}
        />

        <Tab.Screen 
        name="Cart" 
        component={Cart}
        options={{
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused ? "cart" : "cart-outline"}
                size={24}
                color={focused ? Colors.rosa : Colors.verde}
                />
            }
        }}
        />

        <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? Colors.rosa : Colors.verde}
                />
            }
        }}
        />
        
    </Tab.Navigator>
  )
}

export default BottomTabNavigation
import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'; 
import DealsScreen from '../screens/DealsScreen';
import OrderScreen from '../screens/OrderScreen';
import AccountScreen from '../screens/AccountScreen';
import SearchScreen from '../screens/SearchScreen';

import {
  HomeIcon  , 
  SearchIcon  , 
  NewspaperIcon  , 
  UserIcon as UserFocus, 
  TagIcon as TagFocus
} from 'react-native-heroicons/solid'


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator 
   
    initialRouteName= 'Signup'
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarIconStyle: {
            padding: 14,
        },
        tabBarLabelStyle: { 
            fontSize: 13,
            marginTop: 14,
            marginBottom: 18,
            fontWeight: 500
        },
        tabBarStyle: {
            backgroundColor: 'white',
            marginRight: 3,
            height: 84,
            shadowColor: "black",
            shadowOpacity: 90,
            shadowOffset: {
              width: 0,
              height: 20,
              
            },
          elevation: 24,
          shadowRadius: 42,
          setOffset: -8
          
        }
        
    }}>
      <Tab.Screen name="home" component={HomeScreen} options={{
       
      }} /> 
      
      <Tab.Screen name="Orders" component={OrderScreen} options={{
     
      }} />
      
      
      <Tab.Screen name="Accounts" component={AccountScreen} options={{
       
      }} />
    </Tab.Navigator>
  )
}

export default BottomTab







































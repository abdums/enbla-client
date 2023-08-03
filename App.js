import React,{ useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Navigation from './Navigation/Navigation';
import RestaurantProfile from './screens/RestaurantProfile';
import FoodScreen from './screens/FoodScreen';
import BottomTab from './Navigation/BottomTab';
import { Provider } from 'react-redux';
import Store from './Store';
import * as Font from 'expo-font';
import { AppLoading} from 'expo';  
// import './config/firebase';


import firebase from  'firebase/compat/app';
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./config/firebase";
import { getFirestore } from 'firebase/firestore';

export default function App() {


  return (
    <NavigationContainer>
      <Provider store={Store}>
        <StatusBar style='auto'/>
          {/* <TailwindProvider> */}

            <Navigation />
          {/* </TailwindProvider> */}
      </Provider>
    </NavigationContainer>

  );
}


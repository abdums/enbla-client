import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import UserAddress from '../components/UserAddress'
import Categories from '../components/Categories'
import RecommendedFood from '../components/RecommendedFood'
import FeaturedRow from '../components/FeaturedRow'
import FeatureProducts from '../components/FeatureProducts'
import BasketIcon from '../components/BasketIcon'
import ConfirmationButton from '../components/ConfirmationButton'
import { useSelector } from 'react-redux' 

const HomeScreen = () => {
  const navigation = useNavigation(); 
  const {user: {firstName}} = useSelector(state => state.user)

  useLayoutEffect(() => { 
    navigation.setOptions({ 
      headerTitle: "This is the header",
      headerShown: false
    })
  })

  return (
    <>
    <BasketIcon />

    <ScrollView className="bg-white min-h-screen px-2 pt-16">
      <SafeAreaView className="">
          {/* User Address bar */}
          <View className="">
            {/* <UserAddress /> */}
            <Text className="font-medium text-[47px] "> Hi {firstName}!👋</Text>
            <Text className="text-left text-lg font-medium mt-6">Ready to make your order today?</Text>
          </View>
          <View className="border-y border-gray-300/80 my-4 rounded"/>

          {/* Categories */}
          <View className="mt-5 space-y-8 ">
            <View>
              <View className="justify-between items-end flex-row">
                  <Text className="text-xl font-bold text-left">Categories</Text>
              </View>
              <Categories />
            </View>
            
            <View className="relative">    
              <View className="justify-between items-end flex-row"> 
              </View>
              <RecommendedFood />
            </View>

          
            <View>
              <FeatureProducts />
            </View>
          </View>
           

          <View className="flex justify-center items-center mt-16 mb-16">
            <Text className="text-sm text-gray-400 font-medium">That's it!</Text>
          </View>
      </SafeAreaView>

      
    </ScrollView>
    </>

  )
}

export default HomeScreen
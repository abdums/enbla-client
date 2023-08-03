import { urlFor } from '../sanity'; 

import {getFeaturedRestaurants} from '../api'
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, ScrollView ,TouchableOpacity} from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
 

// This is for Feature Products
export default function FeatureProducts  ()  {
  const navigation = useNavigation();
  const [featuredRestaurants, setFeaturedRestaurants] = useState([])

  useEffect(()=>{
      getFeaturedRestaurants().then(data=>{
          setFeaturedRestaurants(data);
          
      })
  },[])
  return (
    <SafeAreaView className="bg-white" >
    <StatusBar
        barStyle="dark-content" 
    />
    

  {/* unnecessary code to be removed */}
       
      

        {/* featured */}
        <View className="mt-5">
        {
           featuredRestaurants?.map((item,index)=>{

               
                return (
                
                  <View  key={item._id}  >
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{item.name}</Text>
          <Text className="text-gray-500 text-xs">
            {item.description}
          </Text>
        </View>
        
        <TouchableOpacity>
          <Text  className="font-semibold">See All</Text>
        </TouchableOpacity>
      </View>

      

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="overflow-visible py-5"
       >   
        {
          
          item?.restaurants.map((resturant,index)=>{
        
              return(
                
      
      <View   className="mr-6 bg-white rounded-3xl shadow-lg" key={resturant._id + resturant.name}>
         
      <TouchableOpacity 
            onPress={() => navigation.navigate("RestaurantStack", {
                 item:resturant,
                  key:resturant._id,
                  id:resturant._id,
                  imgUrl:resturant.image,
                  title:resturant.name,
                  rating:resturant.rating,
                  type:resturant._type,
                  address:resturant.address,
                  description:resturant.description,
                  dishes:resturant.dishes,
                  lng:resturant.lng,
                  lat:resturant.lat,
            })}
            className="w-[281px]   rounded-2xl m-4">
      <Image  className="h-36 w-64 rounded-t-3xl" source={{ uri: urlFor(resturant.image).url()}} />
  
    <View className="px-3 pb-4 space-y-2">
     
      <Text className="text-lg font-bold pt-2">{resturant.name}</Text>
      <View className="flex-row items-center space-x-1">
          {/* <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" /> */}
          <Text className="text-xs">
              <Text className="text-green-700">{resturant.rating}</Text>  <Text className="font-semibold text-gray-700">{resturant.type?.name}</Text>
          </Text>
      </View>
      <View className="flex-row items-center space-x-1">
          <Text className="text-gray-700 text-xs"> Nearby </Text>
      </View>
    </View>
    </TouchableOpacity>
  </View>
  
              )

          })
         
        }           
       </ScrollView>
    
    </View>

               
                         
                )
            })
        }
        </View>
        

        
       
  
      
    </SafeAreaView>
  )
}

 


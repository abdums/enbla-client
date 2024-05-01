import React, { useLayoutEffect, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, ScrollView ,TouchableOpacity,FlatList} from 'react-native'
import BackButton from '../components/BackButton'
import { urlFor } from '../sanity'; 
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { getRestaurantByCategoryId } from '../api';
import TempNavigation from '../components/TempNavigation';



const CategoryScreen = () => {
  const dispatch = useDispatch();
  const { params: {
    id
  }} = useRoute();


  const navigation = useNavigation();
  const[categoryRes, setCategoryRes]= useState([]);
 

    
  useEffect(()=>{
    getRestaurantByCategoryId(id).then(data=>{
      setCategoryRes(data);
        
    })
},[])
  




 

   
console.log(categoryRes.length);
 
  return (
     
<ScrollView>

   < View className="h-full bg-[#dd6e6e] pb-1">
          
            <View className="m-5 z-50 relative ">
              <BackButton />
            </View>
       
      
      <ScrollView
         
        
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="overflow-visible py-5 pb-10"
       >   
        { categoryRes.length===0?(
              <View className="h-full min-h-screen">
              <Text className="font-medium text-left text-3xl">Category</Text>
              
              <View className="flex-row items-center space-x-2 pb-7 pt-3">
                  <View className="flex-row space-x-2 flex-1 bg-gray-200 px-3 py-1 items-center rounded-xl border-cyan-700 ">
                     <Text 
                         
                          className="w-[100%] py-3 rounded-sm text-lg bg-slate-100 text-center font-medium outline-none border-none "
                      >Ooops We don't have resturant in this category!</Text>
                         </View>
              </View>
              </View>

        ):(
         categoryRes?.map((resturant, index) =>{
            console.log(resturant.name);
        
              return(
                
      
      <View   className="mr-6 mb-4 bg-white rounded-3xl shadow-lg" key={resturant._id + resturant.name}>
         
      <TouchableOpacity 
            onPress={() => navigation.navigate("RestaurantStack", {
                 item:resturant,
                  key:resturant._id,
                  id:resturant._id,
                  imgUrl:resturant.image,
                  title:resturant.name,
                  rating:resturant.rating,
                  type:resturant._type,
                  address:"123 main street",
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
       
    </View>
    </TouchableOpacity>
  </View>
  
              )

          }))
         
        }           
       </ScrollView>
    </View>
    <View className="relative  mt-4" > 
    <TempNavigation />
    </View>
     
        </ScrollView>


  );}


;

export default CategoryScreen;
 

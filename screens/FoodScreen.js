import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { StarIcon, MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import BackButton from '../components/BackButton'
import LikeButton from '../components/LikeButton'
import AddOn from '../components/AddOn'
import AddToCart from '../components/AddToCart'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, add_to_basket, remove_from_basket, select_basket_item_with_id } from '../redux/basketSlice'
import { useState } from 'react'
import { urlFor } from '../sanity'


// this
const FoodScreen = () => {

  const { params: {
    id,
    name,
    description,
    avg_person,
    delivery,
    avg_waiting,
    restaurant_name,
    image,
    price,
} } = useRoute();

const items = useSelector(state => select_basket_item_with_id(state, id));
  const [pressed, setPressed] = useState(false);
  const [quantity, setQuantity] = useState(0)
  const dispatch = useDispatch();
 
  const add_item_to_basket = () => { 
      dispatch(add_to_basket({
        id,
        name,
        description,
        price,
        image 
      }));
  
  }

  const remove_item_basket = () => { 
    if (!items.length) return ;  
    dispatch(remove_from_basket({ id }))
  }


  const navigation = useNavigation()
  return (
    <>
      <AddToCart id={id}/>
      <ScrollView className="bg-white min-h-screen pb-24">
        <View className="h-[412px] bg-white ">
        <Image  source={{uri: urlFor(image).url()
                  }}
            className="h-[400px] w-[400px] object-cover"/>
          {/* Backbutton */}
          <View className="m-5 z-50 absolute ">
            <BackButton />

          </View>
          
        </View>
        <SafeAreaView className="px-4 mt-6">

  {/* Headers */}
          <View className="flex flex-row justify-between space-x-1 ">
            <Text className="text-3xl font-medium text-left w-[60%] mb-6">{name}</Text>
           
          </View>
          

 
          
          <View className="flex flex-row justify-between">
            <View className="flex flex-row items-center space-x-4">
              <Text className="font-bold text-left text-4xl"> ETB {price}</Text> 
            </View>

            <View className="flex flex-row space-x-4 items-center">
              <TouchableOpacity 
                disabled={items.length === 0 }
                onPress={remove_item_basket}>
                <MinusCircleIcon size={45} color={
                  items.length > 0 ? "#5887FF" : "#aeaeae" }/>
              </TouchableOpacity>
              <Text className="font-medium text-2xl">{items.length}</Text>

              <TouchableOpacity onPress={add_item_to_basket}>
                <PlusCircleIcon 
                  size={45} 
                  color={"#55DF8E"}/>
              </TouchableOpacity>            
            </View>
          </View>

          <Text className="w-[323px] mt-2 text-gray-500 font-normal">
            {description}
          </Text>
  {/* Sizes */}
          
   
          <View className=" flex flex-col-reverse justify-center items-center mt-32">
              <Text className="text-sm text-gray-400 font-medium">That's it!</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>

  )
}

export default FoodScreen
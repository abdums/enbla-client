import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {UserIcon, HeartIcon} from 'react-native-heroicons/solid'
import { HeartIcon as Heart } from 'react-native-heroicons/outline'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'


// THe params will mostly change , for now the priority is to build the ui and 
// fix the data sets later
const RecommendedCard = ({  id,
  name,
  description,
  // this
  avg_person,
  delivery,
  avg_waiting,
  restaurant_name,
  image,
  price,
}) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false)

  return (
    // Passing this parameters into FoodStack
    <TouchableOpacity 
      // onPress={() => {navigation.navigate("FoodStack", {
      //   id,
      //   name,
      //   description,
      //   avg_person,
      //   delivery,
      //   avg_waiting,
      //   restaurant_name,
      //   image,
      //   price,
      // })}}
      className="w-[281px] h-[179px] bg-black/10  rounded-2xl mr-4">
      {/* Waiting time widget */}
      
      <Image 
        source={{
          uri: image
        }}
      className="w-[281px] h-[179px] rounded-2xl"/>
      
      
   

    


      {/* Good for this many persons */}
      <View className="absolute bottom-3 space-y-2 left-4">
        <Text className="text-xl text-left font-bold relative bottom-1 text-white">{name}</Text>
        <View className="flex-row space-x-4">
          <View className="flex items-center justify-center 
            px-2 h-[23px] bg-[#c8c8c8]/40 rounded-lg">
            <Text className="text-white font-medium text-sm flex items-center ">
              <UserIcon size={16} /> {avg_person} Person</Text>
          </View>

          

        </View>

      </View>
    </TouchableOpacity>
  )
}

export default RecommendedCard
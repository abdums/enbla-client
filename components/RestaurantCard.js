import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { themeColors } from '../theme';
// import * as Icon from "react-native-feather";

export default function ResturantCard({
    id, 
    title,
    imgUrl,
    rating,
    type,
    address,    
    description,
    dishes,
    reviews,
    lng,
    lat
}) {
  console.log(urlFor(imgUrl).url());
  const navigation = useNavigation();
  return (
     
      <View   className="mr-6 bg-white rounded-3xl shadow-lg">
          <Image  className="h-36 w-64 rounded-t-3xl" source={{ uri: urlFor(imgUrl).url()}} />
        
        <View className="px-3 pb-4 space-y-2">
         
          <Text className="text-lg font-bold pt-2">{title}</Text>
          <View className="flex-row items-center space-x-1">
              {/* <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" /> */}
              <Text className="text-xs">
                  <Text className="text-green-700">{rating}</Text>
                  <Text className="text-gray-700"> ({reviews} review)</Text> · <Text className="font-semibold text-gray-700">{type}</Text>
              </Text>
          </View>
          <View className="flex-row items-center space-x-1">
              {/* <Icon.MapPin color="gray" width={15} height={15} /> */}
              <Text className="text-gray-700 text-xs"> Nearby · {address}</Text>
          </View>
        </View>
      </View>
      
      
      
  
    
  )
}











// import { View, Text, TouchableOpacity, Image } from 'react-native'
// import React from 'react'
// import { HeartIcon, ClockIcon, StarIcon } from 'react-native-heroicons/solid'
// import { UserIcon } from 'react-native-heroicons/outline'
// import {useNavigation} from '@react-navigation/native'
// // this
// const RestaurantCard = ({
//     id,
//     avg_waiting, 
//     name, 
//     short_description,
//     avg_person, 
//     ratings, 
//     total_reviews, 
//     delivery_price,
//     address,
//     thumbnail,
//     profile_pic
// }) => {
//     const navigation = useNavigation();
//     return (

// // Testing purposes 
//         <TouchableOpacity 
//             onPress={() => navigation.navigate("RestaurantStack", {
//                 id,
//                 avg_waiting, 
//                 name, 
//                 short_description,
//                 avg_person, 
//                 ratings, 
//                 total_reviews, 
//                 delivery_price,
//                 address,
//                 thumbnail,
//                 profile_pic
//             })}
//             className="w-[281px] h-[179px] bg-black/10  rounded-2xl mr-4">
//               <Image 
//                 source={{
//                 uri: thumbnail
//                 }}
//             className="w-[281px] h-[179px] rounded-2xl"/>
      
// {/* Waiting time widget */}
//             <View className="
//                 flex items-center 
//                 justify-center 
//                 w-[71px] h-[26px]
//                 bg-white rounded-[10px]
//                 absolute left-1 top-1 m-3
//                 ">
//                 <Text className="text-black font-bold text-[14px] items-center flex ">
//                     {ratings} 
//                     <StarIcon size={18} color={"#ffc107"}/> 
//                     <Text className="text-[8px] text-gray-500 font-medium">{`(${total_reviews}+)`}</Text>
//                 </Text>
//             </View>
            
// {/* Good for this many persons */}
//             <View className="absolute bottom-3 space-y-2 left-4">
//                 <Text className="text-xl text-left font-bold relative bottom-1 text-white">{name}</Text>
//                 <View className="flex-row space-x-4">
//                     <View className="flex items-center justify-center 
//                         px-2 h-[23px] bg-[#c8c8c8]/40 rounded-lg">
//                         <Text className="text-white font-medium text-sm flex items-center ">
//                         <ClockIcon size={16} />{avg_waiting}min</Text>
//                     </View>
// {/* Free Delivery */}
//                     <View className="flex items-center justify-center px-2 h-[23px] bg-[#c8c8c8]/40 rounded-lg">
//                         <Text className="text-white font-medium text-sm">{delivery_price}</Text>
//                     </View>
//                 </View>
//             </View>
//         </TouchableOpacity>
//     )
// }

// export default RestaurantCard
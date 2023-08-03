import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import BottomTab from '../Navigation/BottomTab'
// import {TruckIcon, ClockIcon, BadgeCheckIcon} from 'react-native-heroicons/solid'
import { StarIcon } from 'react-native-heroicons/solid'
// import { AdjustmentsIcon, SearchIcon, ChevronDownIcon } from 'react-native-heroicons/outline'
import { TextInput } from 'react-native';
import HitsOfTheWeek from '../components/HitsOfTheWeek'
import HitsOfTheWeekRow from '../components/HitsOfTheWeekRow'
import FilterCard from '../components/FilterCard'
import Menu from '../components/Menu'
import BackButton from '../components/BackButton'
import { useRoute } from '@react-navigation/native'
import BasketIcon from '../components/BasketIcon'
import TempNavigation from '../components/TempNavigation'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../redux/restaurantSlice'
import { urlFor } from '../sanity';
import MenuCard from '../components/MenuCard'
 



const RestaurantProfile = () => {
  const dispatch = useDispatch();
  const { params: {
    item ,
                  
    id,
    key,
    imgUrl ,
    title ,
    rating ,
    type ,
    address ,
    description ,
    dishes ,
    lng ,
    lat,
  }} = useRoute();

  useEffect(() => { 
    dispatch(setRestaurant({

                 item ,
                  key,
                  id,
                  imgUrl ,
                  title ,
                  rating ,
                  type ,
                  address ,
                  description ,
                  dishes ,
                  lng ,
                  lat,
        }))
  }, [dispatch])

  return (
    <> 
    <ScrollView className="bg-white min-h-screen ">
{/* Thumbnail */}
  
        {/* <View className="h-[311px] bg-[#d9d9d9]"> */}
        <Image source={require('../assets/enblalanding.png')} 
            className="h-[320px] w-[400px]   "
            />
            <View className="m-5 z-50 absolute">
              <BackButton />
            </View>
        {/* </View> */}
      <SafeAreaView className="px-4 relative bottom-16 pb-[200px]">
        <View className="items-end flex flex-row justify-between relative
          space-x-6  ">
{/* Profile Picture */}
          <View 
         
            className=" 
              bg-[#d9d9d9] 
            rounded-full h-[120px] w-[120px] 
            border-white border-[11px]
            ">
              <View className="relative bottom-3 right-3 ">
                <Image 
                  source={{uri: urlFor(imgUrl).url()
                  }}
              className="   rounded-full h-[120px] w-[120px] 
               border-[11px]
              "/>
              </View>

              <View className="absolute bottom-0 right-0 bg-white rounded-full "> 
              </View>
          </View>
 
        </View> 
        <View className="relative top-2 flex flex-row items-start">
          <View>
            <Text className="text-3xl font-medium text-left mr-4">{title}</Text>
            <Text className="text-sm font-medium text-gray-500 text-left">{description}</Text>
            <Text className="text-xl font-medium text-gray-500 text-left mt-2">{address}</Text>
          </View>
          <View className="
                flex items-center 
                justify-center">
                <Text className="text-black font-bold text-[14px] items-center flex ">
                 {rating}
                    <StarIcon size={18} color={"#ffc107"}/> 
                    
                </Text>
              </View>
        </View>

 
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex flex-row mt-5 mb-6">
          
 
        </ScrollView>
 

        <View className="border-y border-gray-300/80 my-4 rounded"/>
{/* Restaurant Menu */}
        <View>
          {/* <Menu /> */}
        </View>
        <View className="pb-36 bg-white">
                <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
              
                {/* dishes */}
                {
                    dishes?.map(dish=>{
                        return (
                         
                          <View className="mt-2" key={dish._id}>
                            <MenuCard 
                                key={dish._id}
                                id={dish._id}
                                name={dish.name}
                                description={dish.description}
                                price={dish.price}
                                image={dish.image}
                            />
                            </View>
                        )
                    })
                }
            </View>

      </SafeAreaView>
    </ScrollView>
      
    <View className="relative bottom-[84px]">
      <BasketIcon />
    </View>
    <TempNavigation />
    </>
  )
}

export default RestaurantProfile

 









import {  TouchableOpacity } from 'react-native'
import React from 'react'
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { remove_all_items, select_basket_item, select_basket_total } from '../redux/basketSlice'

// this
const NotificationButton = () => {
  const navigation = useNavigation();
  
 
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate("Notification")}
        className="bg-[#ac5555] h-[43px] w-[46px]  rounded-lg items-center flex justify-center ">
       
    </TouchableOpacity>
  )
}

export default NotificationButton
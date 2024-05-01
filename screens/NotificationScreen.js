import React, {useState} from 'react';




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
        className="bg-[#d14444] h-[43px] w-[46px]  rounded-lg items-center flex justify-center ">
       
    </TouchableOpacity>
  )
}

export default NotificationButton
const NotificationScreen = ({ notifications, onClose }) => {
  return (
    <div className="notification-screen">
      <div className="notification-header">
        <h3>Notifications</h3>
        <button className="close-button" onClick={onClose}>
          <i className="fa fa-times"></i>
        </button>
      </div>
      <ul className="notification-list">
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};
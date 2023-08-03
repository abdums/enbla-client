import { View, Text, Image } from 'react-native'
import React from 'react'
// this
const OrderCard = ({ products, price, currency,image, date, paymentStatus, shippingAddress }) => {
  console.log(products)
  return (
    <View>
      <View className="flex flex-row items-center mb-3 mt-2">
        <Image source={{uri:'https://img.freepik.com/free-vector/cute-burger-holding-soda-drink-cartoon-vector-icon-illustration-food-holiday-icon-concept-isolated_138676-8040.jpg?w=740&t=st=1687761952~exp=1687762552~hmac=88b1d890e9b21d0c9efdaa3bb24fcae7ef2f27d9debece1046952e03a9981518'}} className="w-[63px] h-[64px] bg-[#d9d9d9] rounded-md mr-4"/>
        <View className="mb-5 shadow-lg">
          {/* <Text className="text-left font-medium text-lg">Currency : {currency} </Text> */}
          <Text className="text-gray-500 font-medium text-xs mt-1">Currency : {currency} </Text>
          <Text className="text-gray-500 font-medium text-xs mt-1">Price: {price}</Text>
          <Text className="text-gray-500 font-medium text-xs mt-1">Payment Status: {paymentStatus}</Text>
          <Text className="text-gray-500 font-medium text-xs mt-1">Shipping Address: {shippingAddress.city +", "+ shippingAddress.address}</Text>
          <Text className="text-gray-500 font-medium text-xs mt-1">{date}</Text>

        </View>
        
        {/* View */}
        {/* <View className="absolute right-1 flex items-center justify-center w-[70px] h-[28px] rounded-lg bg-[#c8c8c8]">
          <Text className="text-center font-bold">View</Text>
        </View> */}
      </View>
      <View className="absolute right-0 bottom-1 w-[85%] h-7 border-b border-gray-300/80 "/>
    </View>
  )
}

export default OrderCard
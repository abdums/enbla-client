import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { AdjustmentsIcon, SearchIcon } from 'react-native-heroicons/outline'
import OrderCard from '../components/OrderCard'
import { useSelector } from 'react-redux'


const OrderScreen = () => {
  const {user: {userId}} = useSelector(state => state.user)
  const [orders, setOrders] = useState([])
  const fetchOrderByUserId = async () => {
    const res = await fetch(`https:enblapayment.onrender.com/api/order/getOrder/${userId}`)
    const order = await res.json()
    const completedOrders = order.filter(item => item.paymentStatus === 'completed')
    console.log(completedOrders)
    setOrders(completedOrders)
  }
  useEffect(()=>{
    fetchOrderByUserId()
  },[])
  
  return (
    <ScrollView className="bg-white min-h-screen pt-16 px-2 ">
      <SafeAreaView className="pb-20">
        <View className="">
          <Text className="font-medium text-left text-3xl">Your Order History</Text>
          
          <View className="flex-row items-center space-x-2 pb-7 pt-3">
              <View className="flex-row space-x-2 flex-1 bg-gray-200 px-3 py-1 items-center rounded-xl border-cyan-700 ">
                  {/* <SearchIcon color="gray" size={25}/> */}
                  <Text 
                     
                      className="w-[100%] py-3 rounded-sm text-lg bg-slate-100 text-center font-medium outline-none border-none "
                  >Your Orders</Text>
                {/* <AdjustmentsIcon size={24} color={"#777777"} /> */}
              </View>
          </View>
          </View>
          <View className="border-y border-gray-300/80 rounded"/>
          <View className="mt-4">
            {orders?.length === 0? <Text style={{textAlign:"center"}}>You Have No Order</Text>:
              orders?.map(order => (
                <OrderCard key={order._id} price={order.totalPrice} shippingAddress={order.shippingAddress} paymentStatus={order.paymentStatus} customerId={order.customerId} date={order.orderDate} currency={order.currency} products={order.products} image={"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"}/>
              ))}

          </View>

      </SafeAreaView>
       {/* Footer */}
      <View className=" flex flex-col-reverse justify-center items-center mt-32">
          <Text className="text-sm text-gray-400 font-medium">That's it!</Text>
      </View>
    </ScrollView>
  )
}

export default OrderScreen
 
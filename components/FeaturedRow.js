import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import RestaurantCard from './RestaurantCard'
// this 
const FeaturedRow = ({id, title}) => {
  
    
  return (

    <View className="mb-9">
        <View className="border-y border-gray-300/80 rounded mb-4"/>

        <View className="justify-between items-end flex-row">
            <Text className="text-xl font-medium relative">{title}</Text>
            <Text className="text-sm font-medium text-red-400">Show All</Text>
        </View>
        
        <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="pt-4"
        >
            <View className="flex-row">
                <RestaurantCard 
                    id={1}
                    avg_waiting={"10 - 15"} 
                    name={"Maleda Cafe"}
                    short_description={"Maleda Special, Ertb"}
                    avg_person={"2"} 
                    ratings={"5.0"}
                    total_reviews={"100"}
                    delivery_price={"Free Delivery"}
                    address={"Arat Kilo"}
                    thumbnail={"https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"}
                    profile_pic={"https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-yetsom-beyaynetu.jpg.webp"}
                />                
                <RestaurantCard 
                    id={2}
                    avg_waiting={"10 - 15"} 
                    name={"Sheger Launch"}
                    short_description={"Sheger Special, Burger, Arosto"}
                    avg_person={"2"} 
                    ratings={"5.0"}
                    total_reviews={"100"}
                    delivery_price={"Free Delivery"}
                    address={"Arat Kilo"}
                    thumbnail={"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80"}
                    profile_pic={"https://cdn.mos.cms.futurecdn.net/xDGQ9dbLmMpeEqhiWayMRB.jpg"}

                />                
                <RestaurantCard 
                    id={3}
                    avg_waiting={"10 - 15"} 
                    name={"Romina"}
                    short_description={"Sheger Special, Burger, Arosto"}
                    avg_person={"2"} 
                    ratings={"5.0"}
                    total_reviews={"100"}
                    delivery_price={"Free Delivery"}
                    address={"Arat Kilo"}
                    thumbnail={"https://lh3.googleusercontent.com/p/AF1QipM2s8keAXKeVwUazRdheihGiHIN5SYMTLrN042f=s680-w680-h510"}
                    profile_pic={"ttps://cdn.mos.cms.futurecdn.net/xDGQ9dbLmMpeEqhiWayMRB.jpg"}

/>                
                <RestaurantCard 
                    id={4}
                    avg_waiting={"10 - 15"} 
                    name={"Freetown Resturant"}
                    short_description={"Sheger Special, Burger, Arosto"}
                    avg_person={"2"} 
                    ratings={"5.0"}
                    total_reviews={"100"}
                    delivery_price={"Free Delivery"}
                    address={"Arat Kilo"}
                    thumbnail={"https://lh3.googleusercontent.com/p/AF1QipM2s8keAXKeVwUazRdheihGiHIN5SYMTLrN042f=s680-w680-h510"}
                    profile_pic={"ttps://cdn.mos.cms.futurecdn.net/xDGQ9dbLmMpeEqhiWayMRB.jpg"}

                />                
                <RestaurantCard 
                    id={1}
                    avg_waiting={"10 - 15"} 
                    name={"Romita"}
                    short_description={"Sheger Special, Burger, Arosto"}
                    avg_person={"2"} 
                    ratings={"5.0"}
                    total_reviews={"100"}
                    delivery_price={"Free Delivery"}
                    address={"Arat Kilo"}
                    thumbnail={"https://lh3.googleusercontent.com/p/AF1QipM2s8keAXKeVwUazRdheihGiHIN5SYMTLrN042f=s680-w680-h510"}
                    profile_pic={"ttps://cdn.mos.cms.futurecdn.net/xDGQ9dbLmMpeEqhiWayMRB.jpg"}

                />                
                           
            </View>
        </ScrollView>
    </View>
  )
}

export default FeaturedRow
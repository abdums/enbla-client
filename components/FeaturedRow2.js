import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import RestaurantCard from './RestaurantCard'
// this
const FeaturedRow2 = ({id, title}) => {
  
    
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
                    name={"Saba's Food"}
                    short_description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"}
                    avg_person={"2"} 
                    ratings={"5.0"}
                    total_reviews={"100"}
                    delivery_price={"Free Delivery"}
                    address={"Addis Ababa, Arat kilo"}
                    thumbnail={"https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-9/13508966_1131745173556907_2908253575439854396_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=kHEZiJzpLDEAX-DGAVf&_nc_ht=scontent-mia3-1.xx&oh=00_AfDsfRsK1WaT9_rm0lOwCe1UV_b2VU1rv1X2QSqbvV4cvQ&oe=648D3B83"}
                    profile_pic={"https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-9/13508966_1131745173556907_2908253575439854396_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=kHEZiJzpLDEAX-DGAVf&_nc_ht=scontent-mia3-1.xx&oh=00_AfDsfRsK1WaT9_rm0lOwCe1UV_b2VU1rv1X2QSqbvV4cvQ&oe=648D3B83"}

                />                
                <RestaurantCard 
                    id={2}
                    avg_waiting={"10 - 15"} 
                    name={"Ethiopians's Food Truck"}
                    short_description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"}
                    avg_person={"2"} 
                    ratings={"5.0"}
                    total_reviews={"100"}
                    delivery_price={"Free Delivery"}
                    address={"Bole"}
                    thumbnail={"https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-9/13508966_1131745173556907_2908253575439854396_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=kHEZiJzpLDEAX-DGAVf&_nc_ht=scontent-mia3-1.xx&oh=00_AfDsfRsK1WaT9_rm0lOwCe1UV_b2VU1rv1X2QSqbvV4cvQ&oe=648D3B83"}
                    profile_pic={"https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-9/13508966_1131745173556907_2908253575439854396_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=kHEZiJzpLDEAX-DGAVf&_nc_ht=scontent-mia3-1.xx&oh=00_AfDsfRsK1WaT9_rm0lOwCe1UV_b2VU1rv1X2QSqbvV4cvQ&oe=648D3B83"}

                />                
            </View>
        </ScrollView>
    </View>
  )
}

export default FeaturedRow2
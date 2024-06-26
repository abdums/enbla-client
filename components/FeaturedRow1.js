import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

import RestaurantCard from "./RestaurantCard";
// this
const FeaturedRow1 = ({ id, title }) => {
  return (
    <View className="mb-9">
      <View className="border-y border-gray-300/80 rounded mb-4" />

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
            name={"Shalom Pizzeria"}
            short_description={"Pizza, Sandwitch, Burger"}
            avg_person={"2"}
            ratings={"5.0"}
            total_reviews={"100"}
            delivery_price={"Free Delivery"}
            address={"Addis Ababa, Ethiopia"}
            thumbnail={
              "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80"
            }
            profile_pic={
              "https://cdn.mos.cms.futurecdn.net/xDGQ9dbLmMpeEqhiWayMRB.jpg"
            }
          />
          <RestaurantCard
            id={2}
            avg_waiting={"10 - 15"}
            name={"Pizza Corner"}
            short_description={"Pizza, Sandwitch, Burger"}
            avg_person={"2"}
            ratings={"5.0"}
            total_reviews={"100"}
            delivery_price={"Free Delivery"}
            address={"Addis Ababa, Sidist Kilo"}
            thumbnail={
              "https://images.unsplash.com/photo-1582169296194-e4d644c48063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            }
            profile_pic={
              "https://cdn.mos.cms.futurecdn.net/xDGQ9dbLmMpeEqhiWayMRB.jpg"
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FeaturedRow1;

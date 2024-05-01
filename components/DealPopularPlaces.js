import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import DealProductInfo from "./DealProductInfo";
import SuggestedCard from "./SuggestedCard";
import PopularPlaceCard from "./PopularPlaceCard";
// this
const DealPopularPlaces = () => {
  return (
    <TouchableOpacity
      className="mt-3  
    w-[394] bg-white rounded-3xl px-4 py-6
    shadow-2xl drop-shadow"
    >
      <View>
        <Text className="text-gray-500 font-normal text-left ">
          Now Trending
        </Text>
        <Text className="font-bold text-left text-lg">
          Popular Places To Ear Right Now
        </Text>
      </View>
      <View className="mt-2">
        <PopularPlaceCard
          image="https://photos.smugmug.com/Africa/Eritrea/Asmara/i-Z9D6SR5/0/93341e18/L/Canva%20-%20Injera%20be%20wot%2C%20traditional%20Ethiopian%20Food-min-L.jpg"
          title={"Sga Firfir"}
          restaurant_name={"Maleda Restaurant"}
          price={200}
        />
        <PopularPlaceCard
          image="https://photos.smugmug.com/Africa/Eritrea/Asmara/i-Z9D6SR5/0/93341e18/L/Canva%20-%20Injera%20be%20wot%2C%20traditional%20Ethiopian%20Food-min-L.jpg"
          title={"Enkulal Tibis"}
          restaurant_name={"Sheger Cafe"}
          price={230}
        />
        <PopularPlaceCard
          image="https://photos.smugmug.com/Africa/Eritrea/Asmara/i-Z9D6SR5/0/93341e18/L/Canva%20-%20Injera%20be%20wot%2C%20traditional%20Ethiopian%20Food-min-L.jpg"
          title={"Cheese Burger"}
          restaurant_name={"Wow Burger"}
          price={100}
        />
        <PopularPlaceCard
          image="https://photos.smugmug.com/Africa/Eritrea/Asmara/i-Z9D6SR5/0/93341e18/L/Canva%20-%20Injera%20be%20wot%2C%20traditional%20Ethiopian%20Food-min-L.jpg"
          title={"Romina"}
          restaurant_name={"Romina"}
          price={70}
        />
        <PopularPlaceCard
          image="https://photos.smugmug.com/Africa/Eritrea/Asmara/i-Z9D6SR5/0/93341e18/L/Canva%20-%20Injera%20be%20wot%2C%20traditional%20Ethiopian%20Food-min-L.jpg"
          title={"Romita"}
          restaurant_name={"Romita"}
          price={180}
        />
        <PopularPlaceCard
          image="https://photos.smugmug.com/Africa/Eritrea/Asmara/i-Z9D6SR5/0/93341e18/L/Canva%20-%20Injera%20be%20wot%2C%20traditional%20Ethiopian%20Food-min-L.jpg"
          title={"Yoroda Restaurant"}
          restaurant_name={"Yeroda Restaurant"}
          price={170}
        />
      </View>
    </TouchableOpacity>
  );
};

export default DealPopularPlaces;

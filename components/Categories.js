import "react-native-url-polyfill/auto";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { useState } from "react";
import { getCategories } from "../api";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories?.map((category) => {
          let isActive = category._id == activeCategory;
          let btnClass = isActive ? " bg-gray-600" : " bg-gray-200";
          let textClass = isActive
            ? " font-semibold text-gray-800"
            : " text-gray-500";
          return (
            <View
              key={category._id}
              className="flex justify-center items-center mr-6"
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CategoryScreen", { id: category._id })
                }
                className={"p-1   shadow" + btnClass}
              >
                <Image
                  className="relative bottom-1 w-12 h-10 rounded-full"
                  source={{
                    uri: urlFor(category.image).url(),
                  }}
                />
              </TouchableOpacity>
              <Text className={"text-sm " + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import BackButton from '../components/BackButton'


const CategoryScreen = () => {
  const [selectedTab, setSelectedTab] = useState("restaurant");
  const [selectedFoodType, setSelectedFoodType] = useState(null);

  // Sample restaurant data
  const restaurants = [
    { name: "Restaurant 1", foodType: "Italian" },
    { name: "Restaurant 2", foodType: "Chinese" },
    { name: "Restaurant 3", foodType: "Mexican" },
    // Add more restaurant data here...
  ];

  const handleTabSelection = (tab) => {
    setSelectedTab(tab);
  };

  const handleFoodTypeSelection = (foodType) => {
    setSelectedFoodType(foodType);
  };

  const renderRestaurant = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.foodType}</Text>
    </View>
  );

  const renderFoodType = ({ item }) => (
    <TouchableOpacity onPress={() => handleFoodTypeSelection(item)}>
      <Text>{item.foodType}</Text>
    </TouchableOpacity>
  );

  const renderContent = () => {
    if (selectedTab === "restaurant") {
      return (
        <FlatList
          data={restaurants}
          keyExtractor={(item) => item.name}
          renderItem={renderRestaurant}
        />
      );
    } else if (selectedTab === "food") {
      // Render food list based on selected food type
      return (
        <FlatList
          data={restaurants}
          keyExtractor={(item) => item.foodType}
          renderItem={renderFoodType}
        />
      );
    }
  };

  return (
     

   < View className="h-[311px] bg-[#d9d9d9]">
          
            <View className="m-5 z-50 absolute ">
              <BackButton />
            </View>
       
      <View className={" ms-8 my-10 flex flex-row"}>
        <View className="basis-1/2">
          <TouchableOpacity
            style={{
              padding: 16,
              backgroundColor:
                selectedTab === "restaurant" ? "#3B82F6" : "#E5E7EB",
            }}
            onPress={() => handleTabSelection("restaurant")}
          >
            <Text
              style={{ fontSize: 18, color: "#FFFFFF", textAlign: "center" }}
            >
              Restaurants
            </Text>
          </TouchableOpacity>
        </View>
        <View className="basis-1/2">
        
          <TouchableOpacity
            style={{
              padding: 16,
              backgroundColor: selectedTab === "food" ? "#3B82F6" : "#E5E7EB",
            }}
            onPress={() => handleTabSelection("food")}
          >
            <Text
              style={{ fontSize: 18, color: "#FFFFFF", textAlign: "center" }}
            >
              Food
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>{renderContent()}</View>
    </View>
  );
};

export default CategoryScreen;
``;

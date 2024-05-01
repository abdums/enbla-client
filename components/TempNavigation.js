import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// this
const TempNavigation = () => {
  const navigation = useNavigation();
  return (
    <View className="">
      <View
        style={{
          backgroundColor: "white",
          marginRight: 3,
          height: 84,
          shadowColor: "black",
          shadowOpacity: 90,
          shadowOffset: {
            width: 0,
            height: 20,
          },
        }}
        className="
            bottom-0 absolute
            bg-white w-full h-28 shadow-t-3xl shadow-2xl px-4 z-50"
      >
        <View className="flex flex-row justify-between mt-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="items-center px-2 font-medium"
          >
            <Text>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Orders")}
            className="items-center"
          >
            <Text>Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Accounts")}
            className="items-center"
          >
            <Text>Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TempNavigation;

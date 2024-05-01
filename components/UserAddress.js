import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const UserAddress = () => {
  const {
    user: { address },
  } = useSelector((state) => state.user);
  return (
    <View className="flex flex-row">
      <View className="relative bottom-5 left-1">
        <Text className="font-bold text-[#686868] text-sm">Delivery To</Text>
        <View className="items-center flex flex-row space-x-1">
          <Text className="font-bold text-base text-left">{address}</Text>
          <Text className=""></Text>
        </View>
      </View>
    </View>
  );
};

export default UserAddress;
// this

//Component tobe edited

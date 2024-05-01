import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TextInputBase,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import UserAddress from "../components/UserAddress";
import { TicketIcon } from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import Subtotal from "../components/Subtotal";
import CancelButton from "../components/CancelButton";
import PaymentBar from "../components/PaymentBar";
import { selectRestaurant } from "../redux/restaurantSlice";
import { select_basket_total, select_basket_item } from "../redux/basketSlice";
import { urlFor } from "../sanity";
// this
const OrderSummary = () => {
  const items = useSelector(select_basket_item);
  const total_basket = useSelector(select_basket_total);
  const restaurant = useSelector(selectRestaurant);
  const [groupItemsBasket, setGroupItemsBasket] = useState([]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const grouped_items = items?.reduce((results, items) => {
  //     (results[items.id] = results[items.id] || []).push(items);
  //     return results;
  //   }, {});
  //   setGroupItemsBasket(grouped_items);
  // }, []);

  // this
  return (
    <>
      <PaymentBar />

      <ScrollView className="bg-white min-h-white">
        <SafeAreaView className="pt-16 px-5 pb-[200px]">
          <View>
            <View className="flex flex-row justify-center">
              <View className="absolute left-1">
                <CancelButton />
              </View>
              <View className="relative top-4">
                <UserAddress />
              </View>
            </View>

            <View className="mt-5">
              <Text className="text-left font-medium text-3xl">
                Order Summary
              </Text>
              <View className="border-y border-gray-300/80 my-2 rounded" />
            </View>

            <View className="flex flex-row space-x-6 items-start mt-3">
              <Image
                source={{}}
                className="h-[86px] w-[91px] rounded-lg mb-1
                "
              />
              <View className="space-y-1">
                <Text className="text-xl font-medium text-left">
                  {restaurant?.name}
                </Text>
                <Text>{restaurant?.address}</Text>
              </View>
            </View>
          </View>
          {/* You Order */}
          <Text className="text-left font-semibold text-xl mt-2">
            Your Order
          </Text>
          <View className="border-y border-gray-300/80 my-2 rounded" />
          <ScrollView className="divide-y divide-gray-200">
            {Object.entries(groupItemsBasket)?.map(([key, items]) => (
              <View
                className="flex flex-row justify-between items-center mt-4"
                key={items._id}
              >
                <View className="flex flex-row space-x-4 items-center">
                  <Text className="text-left font-medium text-base">
                    {items.length}x
                  </Text>

                  <Image
                    source={{
                      uri: items[0]?.image,
                    }}
                    className="h-[74px] w-[75px] rounded-lg "
                  />

                  <View className="space-y-1">
                    <Text className="text-left font-medium text-base">
                      {items[0]?.name}
                    </Text>
                    <Text>Chicken & Sauces</Text>
                  </View>
                </View>
                <Text className="text-lg font-medium text-left">
                  {items[0]?.price}
                </Text>
              </View>
            ))}
          </ScrollView>

          <Text className="text-left font-medium text-sm mt-3">
            Additional Requirements:
          </Text>
          <View className="flex py-2 justify-between flex-row rounded-lg bg-[#f3f3f3] px-2 mt-2">
            <View className="items-center flex flex-row space-x-1 relative left-1 ">
              <TextInput
                underlineColorAndroid={"transparent"}
                caretHidden={true}
                textAlign="left"
                textBreakStrategy="balanced"
                multiline={true}
                className=" h-[38px] w-[395px] flex flex-grow "
                placeholder="Add Special Request Here!"
              />
            </View>
          </View>
          <View className="border-y border-gray-300/80 my-4 rounded" />
          <View className="mt-3">
            <View>
              <Text className="font-medium text-lg text-left">
                Cost Summary
              </Text>
              <Subtotal
                subtotal={Math.floor(-total_basket)}
                discount={Math.floor(items[0]?.price / 4)}
                shipping_fee={Math.floor(items[0]?.price / 4)}
                total={Math.floor(
                  -total_basket + items[0]?.price / 4 + items[0]?.price / 4
                )}
                items={items.length}
              />
            </View>
            <Text className="font-medium text-lg text-left mt-3">
              Payment Method
            </Text>
            <TouchableOpacity className="mt-4">
              <View className="rounded-xl bg-[#f3f3f3] h-[64px]">
                <View className="flex flex-row space-x-3 justify-between items-center px-5 py-3">
                  <View className="items-center flex flex-row space-x-3">
                    <Image
                      source={{
                        uri: "https://play-lh.googleusercontent.com/3oiT4ZT74dy58LzNL1_66_-ySeoNMcKNI3ObGg_DziviGCc2tiNkYOWH5-MNvu0SrSIJ",
                      }}
                      className="h-[40px] w-[40px] mr-2"
                    />
                    <Text className="text-xl font-medium text-left">Chapa</Text>
                  </View>
                  <Text className="text-[#9b9b9b] text-sm font-medium">
                    Edit
                  </Text>
                </View>
              </View>
              <View className="border-y border-gray-300/80 my-4 rounded" />
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="rounded-xl bg-[#f3f3f3] h-[64px]">
                <View className="flex flex-row space-x-3 justify-between items-center px-5 py-3">
                  <View className="items-center flex flex-row space-x-3">
                    <Image
                      source={{
                        uri: "https://play-lh.googleusercontent.com/Mtnybz6w7FMdzdQUbc7PWN3_0iLw3t9lUkwjmAa_usFCZ60zS0Xs8o00BW31JDCkAiQk",
                      }}
                      className="h-[40px] w-[40px] mr-2"
                    />
                    <Text className="text-xl font-medium text-left">
                      Tele birr
                    </Text>
                  </View>
                  <Text className="text-[#9b9b9b] text-sm font-medium">
                    Edit
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View className="border-y border-gray-300/80 my-4 rounded" />
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default OrderSummary;

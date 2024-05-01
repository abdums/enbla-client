import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import UserAddress from "../components/UserAddress";
import CancelButton from "../components/CancelButton";
import CartItems from "../components/CartItems";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { TicketIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../redux/restaurantSlice";
import {
  remove_from_basket,
  select_basket_item,
  select_basket_total,
  remove_all_items,
  add_to_basket,
} from "../redux/basketSlice";
import { useState } from "react";
import { useEffect } from "react";
import Currency from "react-currency-formatter";
import ConfirmationButton from "../components/ConfirmationButton";
import Subtotal from "../components/Subtotal";
import { urlFor } from "../sanity";
// this

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(select_basket_item);
  const dispatch = useDispatch();
  const [groupItemsBasket, setGroupItemsBasket] = useState([]);
  const total_basket = useSelector(select_basket_total);

  useEffect(() => {
    const grouped_items = items.reduce((results, items) => {
      (results[items.id] = results[items.id] || []).push(items);
      return results;
    }, {});
    setGroupItemsBasket(grouped_items);
  }, [items]);

  console.log(groupItemsBasket);

  return (
    <>
      <ScrollView className="bg-white min-h-screen px-2 py-16">
        <SafeAreaView className="pt-16 px-4 pb-[200px]">
          <View className="flex flex-row justify-center">
            <View className="absolute left-1">
              <CancelButton />
            </View>
            <View className="relative top-4">
              <UserAddress />
            </View>
          </View>
          <View className="mt-4">
            <Text className="text-left font-medium text-3xl">Cart Page</Text>
            <View className="border-y border-gray-300/80 my-4 rounded" />
          </View>

          <View className="flex flex-row justify-between items-baseline">
            <Text className="text-left text-sm font-normal text-gray-500">
              {items.length} Items in the Cart
            </Text>
            <TouchableOpacity onPress={() => dispatch(remove_all_items(items))}>
              <Text className="text-red-500 text-right text-xs font-medium relative top-1">
                REMOVE ALL
              </Text>
            </TouchableOpacity>
          </View>

          {/* Items in the cart  */}
          <View className="mt-5">
            <ScrollView className="divide-y divide-gray-200 ">
              {Object.entries(groupItemsBasket).map(([key, items]) => (
                <View
                  key={key}
                  className="mb-4 flex flex-row justify-between px-2"
                >
                  <View className="flex flex-row space-x-3 justify-between items-center">
                    <View className="rounded-lg ">
                      {/* <Image 
                               source={{uri: urlFor(image).url()
                               }}
                               
                            className="h-[61px] w-[61px]
                            "/> */}
                    </View>

                    <View className="">
                      <Text className="font-medium text-lg text-left ">
                        {items[0]?.name}
                      </Text>
                      <Text className="text-sm font-medium text-gray-500 text-left">
                        {items[0]?.price}
                      </Text>
                    </View>
                  </View>
                  <View className="flex flex-row">
                    <TouchableOpacity
                      onPress={() =>
                        dispatch(remove_from_basket({ id: items[0]?.id }))
                      }
                    >
                      <MinusCircleIcon size={35} color={"#aeaeae"} />
                    </TouchableOpacity>
                    <Text className="font-small text-xl px-4">
                      {items.length}
                    </Text>
                    <TouchableOpacity
                      onPress={() => dispatch(add_to_basket(items[0]))}
                    >
                      <PlusCircleIcon size={35} color={"#55DF8E"} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>

            <View className="border-y border-gray-300/80 my-4 rounded" />
          </View>

          {/* Promotion Code */}
          <View className="flex py-2 justify-between flex-row rounded-lg bg-[#f3f3f3] px-2">
            <View className="items-center flex flex-row space-x-1 relative left-1">
              <TicketIcon color="gray" size={25} />
              <TextInput
                placeholder="Add Promo Code"
                className=" text-base font-medium"
              />
            </View>
            <TouchableOpacity
              className="bg-black relative right-4
            items-center h-[39px] w-[70px] rounded-lg flex justify-center"
            >
              <Text className="text-white font-medium text-sm">Apply</Text>
            </TouchableOpacity>
          </View>

          <Subtotal
            subtotal={Math.floor(-total_basket)}
            discount={0}
            shipping_fee={0}
            total={Math.floor(-total_basket)}
            items={items.length}
          />
        </SafeAreaView>
      </ScrollView>

      {/* Continue Button */}

      <ConfirmationButton />
    </>
  );
};
MinusCircleIcon;
export default BasketScreen;

// this

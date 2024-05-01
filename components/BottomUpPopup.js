import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
// import { ChevronDownIcon, ChevronRightIcon, LocationMarkerIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from "react-redux";
import {
  select_basket_total,
  select_basket_item,
  remove_all_items,
} from "../redux/basketSlice";
import * as Animatable from "react-native-animatable";
import { emptyBasket } from "../slices/basketSlice";

const BottomUpPopup = () => {
  const navigation = useNavigation();
  const total_basket = useSelector(select_basket_total);
  const {
    user: { address, userId, firstName, lastName, email },
  } = useSelector((state) => state.user);
  const items = useSelector(select_basket_item);
  const [groupItemsBasket, setGroupItemsBasket] = useState([]);
  const [url, setUrl] = useState("");
  const [tx_ref, setTxRef] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    const grouped_items = items?.reduce((results, items) => {
      (results[items.id] = results[items.id] || []).push(items);
      return results;
    }, {});
    setGroupItemsBasket(grouped_items);
  }, [items]);

  console.log(groupItemsBasket);
  console.log(-total_basket);

  const payWithChapa = async () => {
    const payload = {
      products: [],
      customerId: userId,
      email: email,
      amount: Math.floor(-total_basket) + Math.floor(-total_basket / 16),
      customer: {
        email,
        first_name: firstName,
        last_name: lastName,
      },
      currency: "ETB",
      first_name: firstName,
      last_name: lastName,
      products: [],
      shippingAddress: {
        city: address,
        address: "Ethiopia",
      },
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    const res = await fetch(
      "https://enblapayment.onrender.com/api/payment/chapa",
      options
    );
    const paymentres = await res?.json();
    console.log(paymentres);
    dispatch(remove_all_items());
    Linking.openURL(paymentres?.data?.checkout_url);

    console.log("hegghwhew");
  };

  useEffect(() => {
    payWithChapa();
  }, []);

  return (
    <View className="bg-black/75 min-h-full">
      <TouchableOpacity
        className="  min-h-[60%]"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Animatable.View
        animation="slideInUp"
        iterationCount={1}
        className="bg-white h-[375px] w-full absolute bottom-1 rounded-t-3xl px-4 pt-8"
      >
        <View className="flex flex-row justify-between">
          <Text className="text-xl font-medium text-left">Delivery</Text>
          <View className="flex flex-row">
            <View className="items-center flex flex-row space-x-2">
              {/* <LocationMarkerIcon size={20}/> */}
              <Text className="font-semibold text-base ml-1 underline-offset-1">
                {address}
              </Text>
              <Text className="">
                {/* <ChevronRightIcon size={20} strokeWidth={4} /> */}
              </Text>
            </View>
          </View>
        </View>
        <View className="border-y border-gray-300/80 my-4 rounded" />
        <View className="">
          <View className="flex flex-row justify-between">
            <Text className="text-xl font-medium text-left">
              Estimated total cost
            </Text>
            <Text className="text-xl font-medium text-left">
              ~ETB {Math.floor(-total_basket) + Math.floor(-total_basket / 16)}
            </Text>
          </View>
          <Text className="w-[328px] text-left text-sm text-gray-600">
            Please note that chapa is the only payment option we have so far and
            more will be added soon
          </Text>
        </View>
        <View className="border-y border-gray-300/80 my-4 rounded" />
        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-row space-x-3 items-center">
            <Image
              source={{
                uri: "https://pbs.twimg.com/profile_images/1565219509841326080/m3POypTs_400x400.jpg",
              }}
              className="h-[50px] w-[50px] mr-2 object-contain"
            />
            <Text className="text-xl font-medium text-left">Chapa</Text>
          </View>
          {/* <ChevronRightIcon size={20} strokeWidth={4} /> */}
        </View>

        <TouchableOpacity
          onPress={payWithChapa}
          className="bg-black items-center rounded-2xl p-5 mt-4"
        >
          <View className="items-center space-x-1 flex flex-row">
            <Text className="text-white font-medium text-2xl ">
              Confirm Order
            </Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default BottomUpPopup;

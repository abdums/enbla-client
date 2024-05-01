import { TouchableOpacity } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  remove_all_items,
  select_basket_item,
  select_basket_total,
} from "../redux/basketSlice";

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
  />
</svg>;

// this
const BackButton = () => {
  const navigation = useNavigation();
  const total_basket = useSelector(select_basket_total);
  const dispatch = useDispatch();
  const items = useSelector(select_basket_item);

  const clearCart = (cart) => {
    if (cart.length !== 0) {
      console.log(`cart is not empty, clearing cart and going back`);
      dispatch(remove_all_items({ id: cart[0] }));
      navigation.goBack();
    } else {
      console.log(`going back to the previous page`);
      navigation.goBack();
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        clearCart(items);
      }}
      className="bg-[#ede0e0] h-[43px] w-[46px]  rounded-lg items-center flex justify-center "
    >
      <ChevronLeftIcon color="#000" size={24} />
    </TouchableOpacity>
  );
};

export default BackButton;

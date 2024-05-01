import { View, Text, Image } from "react-native";
import React from "react";
import RecommendedCard from "./RecommendedCard";
import { ScrollView } from "react-native";

const RecommendedFood = () => {
  return (
    // this
    <ScrollView
      contentContainerStyle={{
        paddingTop: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <RecommendedCard
        id={1}
        name="Cheeseburger"
        description="Torem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        avg_person={"2"}
        delivery={"Free Delivery"}
        avg_waiting={"10 - 15"}
        restaurant_name={"Wow Burger"}
        image={
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
        }
        price={"150"}
      />
      <RecommendedCard
        id={2}
        name="Beyaynet"
        description="Aorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        avg_person={"2"}
        delivery={"Free Delivery"}
        avg_waiting={"10 - 15"}
        restaurant_name={"Sara Mother Bet"}
        image={
          "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-yetsom-beyaynetu.jpg.webp"
        }
        price={"150"}
      />
      <RecommendedCard
        id={3}
        name="Kitfo"
        description="Kitfo is a very popular dish from the Gurage region of Ethiopia and one of the easiest to make. Kitfo literally means chopped or minced beef. It's served along with homemade cottage cheese during holidays and special occasions, such as Ethiopian Orthodox Christmas"
        avg_person={"2"}
        delivery={"Free Delivery"}
        avg_waiting={"10 - 15"}
        restaurant_name={"5Kilo Marefiya"}
        image={
          "https://img.theculturetrip.com/wp-content/uploads/2020/03/gettyimages-1167198929.jpg"
        }
        price={"150"}
      />
    </ScrollView>
  );
};

export default RecommendedFood;

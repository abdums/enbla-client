import { View, Text } from 'react-native'
import React from 'react'
import SuggestedCard from './SuggestedCard'
// this
const SuggestedResults = () => {
  return (
    <View>
        <Text className="font-bold text-xl text-left">Suggested</Text>
        <View className="border-b border-gray-300/80 mt-2 rounded"/>
        
        <View className="mt-4">
            <SuggestedCard image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir2NSfxLHAfXyfJpJM9rVDqPAVTQFYBvi1g&usqp=CAU"} title={"Doro Wot"} restaurant_name={"Yod Abyssinia"} price={4.99}/>
            <SuggestedCard image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir2NSfxLHAfXyfJpJM9rVDqPAVTQFYBvi1g&usqp=CAU'} title={"Tibis Firfir"} restaurant_name={"Beletu Retsuarant"} price={4.99}/>
            <SuggestedCard image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir2NSfxLHAfXyfJpJM9rVDqPAVTQFYBvi1g&usqp=CAU'} title={"Pizza"} restaurant_name={"Wow Burger"} price={4.99}/>
            <SuggestedCard image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir2NSfxLHAfXyfJpJM9rVDqPAVTQFYBvi1g&usqp=CAU'} title={"Shuro"} restaurant_name={"Sara Mother Bet"} price={4.99}/>
        </View>

        {/* Footer */}
        <View className="flex justify-center items-center mt-32 mb-10">
            <Text className="text-sm text-gray-400 font-medium">That's it!</Text>
        </View>
    </View>
  )
}

export default SuggestedResults
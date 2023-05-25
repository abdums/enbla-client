import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
// import SuggestedCard from './SuggestedCard'
import DealProductInfo from './DealProductInfo'
// this
const DealCard = () => {
  return (
    <TouchableOpacity className="mt-3">
        <View className="w-[394] h-[272px] rounded-t-3xl bg-[#adadad]">
        </View>
        <DealProductInfo image="https://photos.smugmug.com/Africa/Eritrea/Asmara/i-Z9D6SR5/0/93341e18/L/Canva%20-%20Injera%20be%20wot%2C%20traditional%20Ethiopian%20Food-min-L.jpg" title={"Doro Wot"} restaurant_name={"Abase Restaurant"} price={4.22}/>
    </TouchableOpacity>
  )
}

export default DealCard
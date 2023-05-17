// import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native'
// import React from 'react'
// import { AdjustmentsIcon, SearchIcon } from 'react-native-heroicons/outline'
// import SuggestedResults from '../components/SuggestedResults'
// import DiscoverCard from '../components/DiscoverCard'

// const SearchScreen = () => {
//   return (
//     <ScrollView className="bg-white min-h-screen">
//       <SafeAreaView className="pt-16 px-4">
//         {/* Heading  Search*/}
//         <View>
//           <Text className="font-medium text-left text-3xl">Search</Text>
//           {/* Input Search field */}
//           <View className="flex-row items-center space-x-2 pb-2 pt-3">
//               <View className="flex-row space-x-2 flex-1 bg-gray-200 px-3 py-1 items-center rounded-xl">
//                   <SearchIcon color="gray" size={25}/>
//                   <TextInput 
//                       style={
//                         {
//                           outlineStyle: 'none'
//                         }
//                       }
//                       placeholder="Search Restaurant's Menu" 
//                       className="w-[100%] py-3  rounded-sm text-lg font-medium outline-none border-none "
//                   />
//                 <AdjustmentsIcon size={24} color={"#777777"} />
//               </View>
//             </View>
//           </View>

//           <View className="mt-4">
//             <Text className="font-bold text-xl text-left">Discover</Text>
//             <View className="border-b border-gray-300/80 mt-2 rounded"/>

//           </View>
//           {/* Suggested/ Trending Search Results */}
//           <View className="">
//             <DiscoverCard title={"nuggets"}/>            
//             <DiscoverCard title={"nuggets"}/>            
//             <DiscoverCard title={"nuggets"}/>            
//           </View>
//           {/* Suggested Meals */}
//           <View className="mt-14">
//             <SuggestedResults />
//           </View>
//         </SafeAreaView>
//     </ScrollView>
//   )
// }

// export default SearchScreen


import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import DealCard from '../components/DealCard'
import DealPopularPlaces from '../components/DealPopularPlaces'

const SearchScreen = () => {
  return (
    <ScrollView className="bg-white min-h-screen">
      <SafeAreaView className="pt-16 px-4 mb-7">
        <View>
          <Text className="text-sm font-medium text-gray-500">Saturday, 6 August</Text>
          <Text className="text-[44px] font-medium text-left">Today</Text>
        </View>

        <View className="">
          <DealCard />
        </View>
        <View className="mt-7">
          <DealPopularPlaces />
        </View>

        <View className="mt-7">
          <DealCard />
        </View>
      </SafeAreaView> 
      <View className=" flex flex-col-reverse justify-center items-center mt-32">
          <Text className="text-sm text-gray-400 font-medium">That's it!</Text>
      </View>
    </ScrollView>
  )
}
// this

export default SearchScreen
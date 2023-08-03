import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ChevronRightIcon } from 'react-native-heroicons/outline' 
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { clearUser } from '../redux/userSlice'
// import { useAuthentication } from '../utils/hooks/useAuthentication';

const AccountScreen = () => {
  const navigation = useNavigation();
  const {user: {firstName, lastName, email, phone, address}} = useSelector(state => state.user)

  return (
    <ScrollView className="bg-white min-h-screen px-2 py-16">
      <SafeAreaView className="pb-[200px]">
        
        {/* Header */}
        <View>
          <Text className="font-medium text-left text-3xl">Account</Text>
          <View className="border-y border-gray-300/80 my-4 rounded"/>
        </View>
        {/* User Details */}
        <TouchableOpacity className="flex flex-row items-center ">
          <Image source={require("../assets/profile.png")} className="w-20 h-20 bg-[#d9d9d9] rounded-full mr-5" />
          <View>
            <Text className="font-medium text-lg text-left">{firstName +" "+ lastName}</Text>
            <Text className="text-sm font-normal text-left text-gray-400">{phone}</Text>
          </View>
          <View className="absolute right-1">
            <ChevronRightIcon height={16} width={10} strokeWidth={4} />
          </View>
        </TouchableOpacity>

        <View className="border-y border-gray-300/80 mt-4 pt-3 pb-4">
          <TouchableOpacity>
            <Text className="text-left text-xl font-medium">
             {email}
            </Text>
          </TouchableOpacity>
        </View>
        {/* Css Note:  Border Bottom only  */}
        <View className="border-b border-gray-300/80 pt-3 pb-4">
          <TouchableOpacity>
            <Text className="text-left text-xl font-medium">
              {address}
            </Text>
          </TouchableOpacity> 
        </View> 

        <View className="border-b border-gray-300/80 pt-3 pb-4">
          <TouchableOpacity>
            <Text className="text-left text-xl font-medium">
              Notification
            </Text>
          </TouchableOpacity>
        </View>

        <View className="border-b border-gray-300/80 pt-3 pb-4">

          <TouchableOpacity>
            <Text className="text-left text-xl font-medium">
              Language
            </Text>
          </TouchableOpacity>
        </View>
       
        <View className="border-b border-gray-300/80 pt-3 pb-4">
          <TouchableOpacity>
            <Text className="text-left text-xl font-medium">
              Settings
            </Text>

          </TouchableOpacity>
        </View>
       
        <View className="border-b border-gray-300/80 pt-3 pb-4">
          <TouchableOpacity>
            <Text className="text-left text-xl font-medium">
              Invite Friends
            </Text>
          </TouchableOpacity>
        </View>
       
        <View className="border-b border-gray-300/80 pt-3 pb-4">
          <TouchableOpacity className="">
            <Text className="text-left text-xl font-medium">
              Support
            </Text>
          </TouchableOpacity>
        </View>


        <TouchableOpacity 
          onPress={() => {
            clearUser()
            navigation.navigate("Signin")
          }}
          className="w-full py-2 rounded-md items-center bg-[#d9d9d9] mt-5 ">
          <Text className="text-xl font-medium"   >sign Out</Text>
        </TouchableOpacity>
       
      </SafeAreaView>
    </ScrollView>
  )
}

export default AccountScreen

// this
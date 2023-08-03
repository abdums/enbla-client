import { 
  View, 
  Text,
  ScrollView, 
  TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native'

import React from 'react'
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react'; 
import { useNavigation } from '@react-navigation/native'; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/userSlice';
  

export default function SignUpScreen(props) {
    const [showPass, setShowPass] = useState(false);
    const [showPassConfirm, setShowPassConfirm] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)


    const [loading, setLoading] = useState(false);
  
    const auth = getAuth();
    const db = getFirestore()
    const navigation = useNavigation();

    
    const onSignUp = () => {
        if (firstName.length == 0) {
          alert("Please Enter first Name");
        } else if (email.length == 0) {
          alert("Please Enter Email");
        } else if (password.length == 0) {
          alert("Please Enter Password");
        } else if (confirmPass.length == 0) {
          alert("Please Enter Confirm Password");
        } else if (password != confirmPass) {
          alert("Confirm Password does not match");
        }  
         else if (lastName.length == 0){
            alert("Please Enter Last Name");
        }
        else if(phone.length == 0 ){
            alert("Please Enter Phone Number");
        }
        else if(address.length == 0 ){
            alert("Please Enter Address");
        } else {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential?.user;
              const userDocRef = addDoc(collection(db, 'users'), {
                userId: user?.uid,
                adress: address,
                email: user?.email,
                phone,
                firstName,
                lastName,
                password,
                timeStamp:serverTimestamp()
              })
              console.log(userDocRef)
            //   const userId = userDocRef
              dispatch(setUser({ userId:user?.uid, email, address, phone, firstName, lastName}));
              navigation.navigate("Signin");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
              // ..
            });
         
         
        }
      };
    


  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
        <SafeAreaView className="">
    <ScrollView className="bg-white pt-16 px-4 min-h-screen">
            {/* Welcome Page  */}
            <View className="mt-32 flex justify-center items-center">
            <Image source={require('../assets/logo.png')} style={{width:150,height:150,alignSelf:'center',objectFit:'cover'}}/>

                <Text className="font-medium text-3xl">Welcome to our App</Text>
            </View>

            <View className="space-y-4 mt-14">
                <View className="space-y-1">
                    <Text className="text-left font-bold text-lg">First Name</Text>
                    <View className="bg-[#d9d9d9] p-1 rounded-lg">
                        <TextInput 
                             label="First Name"
                             placeholder="John"
                             value={firstName}
                             onChangeText={(val) => setFirstName(val)}
                            className="ml-2 w-[80%] py-3  rounded-sm text-sm font-medium outline-none border-none "
                        />
                    </View>
                </View>
                <View className="space-y-1">
                    <Text className="text-left font-bold text-lg">Last Name</Text>
                    <View className="bg-[#d9d9d9] p-1 rounded-lg">
                        <TextInput 
                             label="Last Name"
                             placeholder="Doe"
                             value={lastName}
                             onChangeText={(val) => setLastName(val)}
                            className="ml-2 w-[80%] py-3  rounded-sm text-sm font-medium outline-none border-none "
                        />
                    </View>
                </View>
                <View className="space-y-1">
                    <Text className="text-left font-bold text-lg">Address</Text>
                    <View className="bg-[#d9d9d9] p-1 rounded-lg">
                        <TextInput 
                             label="Name"
                             placeholder="Arat Killo"
                             value={address}
                             onChangeText={(val) => setAddress(val)}
                            className="ml-2 w-[80%] py-3  rounded-sm text-sm font-medium outline-none border-none "
                        />
                    </View>
                </View>
                <View className="space-y-1">
                    <Text className="text-left font-bold text-lg">Phone</Text>
                    <View className="bg-[#d9d9d9] p-1 rounded-lg">
                        <TextInput 
                             label="Name"
                             placeholder="0910101010"
                             value={phone}
                             onChangeText={(val) => setPhone(val)}
                            className="ml-2 w-[80%] py-3  rounded-sm text-sm font-medium outline-none border-none "
                        />
                    </View>
                </View>
                <View className="space-y-1">
                    <Text className="text-left font-bold text-lg">Email</Text>
                    <View className="bg-[#d9d9d9] p-1 rounded-lg ">
                        <TextInput 
                           label="Email"
                           placeholder="johndoe@gmail.com"
                           value={email}
                           onChangeText={(val) => setEmail(val)}
                            className="ml-2 w-[80%] py-3  rounded-sm text-sm font-medium outline-none border-none "
                        />
                    </View>
                </View>
                <View className="space-y-1">
                    <Text className="text-left font-bold text-lg">Password</Text>
                    <View className="bg-[#d9d9d9] p-1 rounded-lg ">
                        <TextInput 
                         label="Password"
                         placeholder="***********"
                         password
                         secureTextEntry={showPass ? false : true}
                         onPress={() => setShowPass(!showPass)}
                         value={password}
                         onChangeText={(val) => setPassword(val)}
                            className="ml-2 w-[80%] py-3  rounded-sm text-sm font-medium outline-none border-none "
                        />
                    </View>
                </View>
                <View className="space-y-1">
                    <Text className="text-left font-bold text-lg">Confirm Password</Text>
                    <View className="bg-[#d9d9d9] p-1 rounded-lg ">
                        <TextInput 
                           label="Confirm Password"
                           placeholder="***********"
                           password
                           secureTextEntry={showPassConfirm ? false : true}
                           onPress={() => setShowPassConfirm(!showPassConfirm)}
                           value={confirmPass}
                           onChangeText={(val) => setConfirmPass(val)}
                           className="ml-2 w-[80%] py-3  rounded-sm text-sm font-medium outline-none border-none "
                        />
                    </View>
                       

                </View>
            </View>

            {/* <View className="mt-8 flex flex-row space-x-3 items-center">
              <View className="border-2 h-6 w-6 rounded-md"/>
              <Text className="font-medium text-sm ">
                I agree to Terms & Conditions
              </Text>
            </View> */}

            {/* Login Button  */}
            <TouchableOpacity className="bg-black items-center rounded-xl p-5 mt-24">
                <Text className="text-white text-lg font-bold " onPress={onSignUp}   >Sign Up</Text>
                {/* onPress={signUp}  */}
            </TouchableOpacity>
            
            <View className="mb-10 pt-16">
                <Text className="text-gray-400 font-normal text-sm text-center">
                   Already have an account?
                    <Text className="font-medium text-sm text-blue-500 underline"
                        onPress={() => {navigation.navigate("Signin")}}
                    > Log In Here</Text>
                </Text> 
                <View className="mt-5 flex flex-row items-center justify-center space-x-2 ">
                    <View className="border-b border-gray-300/80 flex-grow"/>
                    <Text className=" bg-white text-xs font-normal text-center text-gray-500"> </Text>
                    <View className="border-b border-gray-300/80 flex-grow"/>
                </View>

                <View className="flex flex-row space-x-5 items-center  justify-center mt-7">
                   
                </View>
            </View>
    </ScrollView>
        </SafeAreaView>
  )
}


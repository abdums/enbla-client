import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { auth, db } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../redux/userSlice";

const SigninScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const {
    user: { firstName },
  } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setvalidationMessage] = useState("");
  const fetchUserData = async (userId) => {
    const q = query(collection(db, "users"), where("userId", "==", userId));

    const querySnapshot = (await getDocs(q)).docs[0];

    const userData = querySnapshot.data();
    dispatch(
      setUser({
        userId: userData?.userId,
        address: userData?.adress,
        email: userData?.email,
        firstName: userData?.firstName,
        lastName: userData?.lastName,
        phone: userData?.phone,
      })
    );
    // querySnapshot.forEach((doc) => {
    // // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    // });
  };

  const login = async () => {
    if (email.length == 0) {
      alert("Please Enter Email");
    } else if (email.length == 0) {
      alert("Please Enter Password");
    }
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const userId = user?.user?.uid;
      // fetch user by id
      const userData = fetchUserData(userId);
      navigation.navigate("Home");
    } catch (error) {
      setvalidationMessage(error.message);
    }
  };

  return (
    <ScrollView className="bg-white min-h-white pt-16 px-4 ">
      <SafeAreaView className="">
        {/* Welcome Page  */}
        <View className="mt-32 flex justify-center items-center">
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 150, height: 150, alignSelf: "center" }}
          />
          <Text className="font-medium text-3xl">Welcome !👋</Text>
          {/* {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>} */}
        </View>

        <View className="space-y-4 mt-14">
          <View className="space-y-1">
            <Text className="text-left font-bold text-lg">Email</Text>
            <View className="bg-[#d9d9d9] p-1 rounded-lg">
              <TextInput
                placeholder="Email"
                containerStyle={{ marginTop: 10 }}
                value={email}
                onChangeText={(text) => setEmail(text)}
                className="ml-2 w-[80%] py-3  rounded-sm text-sm font-medium outline-none border-none "
              />
            </View>
          </View>
          <View className="space-y-1">
            <Text className="text-left font-bold text-lg">Password</Text>
            <View className="bg-[#d9d9d9] p-1 rounded-lg ">
              <TextInput
                placeholder="Password"
                containerStyle={{ marginTop: 10 }}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                className="ml-2 w-[80%] py-3  rounded-sm text-sm font-medium outline-none border-none "
              />
            </View>
            {<Text>{validationMessage}</Text>}
          </View>
          <TouchableOpacity
            onPress={login}
            className="bg-black items-center rounded-xl p-5 mt-24"
          >
            <Text className="text-white text-lg font-bold ">Login</Text>
          </TouchableOpacity>
        </View>

        <View className=" mb-10 mt-14">
          <Text className="text-gray-400 font-normal text-sm text-center">
            Don't have an account?
            <Text
              className="font-medium text-sm text-blue-500 underline"
              onPress={() => {
                navigation.navigate("Signup");
              }}
            >
              {" "}
              Sign Up Here
            </Text>
          </Text>
          <View className="mt-5 flex flex-row items-center justify-center space-x-2 ">
            <View className="border-b border-gray-300/80 flex-grow" />
            <Text className=" bg-white text-xs font-normal text-center text-gray-500">
              {" "}
            </Text>
            <View className="border-b border-gray-300/80 flex-grow" />
          </View>

          <View className="flex flex-row space-x-5 items-center  justify-center mt-7"></View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SigninScreen;

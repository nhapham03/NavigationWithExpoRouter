import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <View>
      <Text>This is Home Page</Text>
      <Link href="/AboutPage">Go to About Page</Link>
      <Link href="/user/1">Go to User Profile Page with ID 1</Link>
      <Link href="/user/2">Go to User Profile Page with ID 2</Link>
    </View>
  );
};

export default HomePage;

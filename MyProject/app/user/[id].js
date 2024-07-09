import React from "react";
import { View, Text } from "react-native";
import { usePathname } from "expo-router";

const UserProfilePage = () => {
  const pathname = usePathname();

  const userId = pathname.split("/")[2]; 

  return (
    <View>
      <Text>User Profile Page</Text>
      <Text>User ID: {userId}</Text>
    </View>
  );
};

export default UserProfilePage;

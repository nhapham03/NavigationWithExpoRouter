import React from "react";
import { View, Text, Button, Pressable } from "react-native";
import { useRouter } from "expo-router";

const AboutPage = () => {
  const router = useRouter();

  return (
    <View>
      <Text>About Page</Text>
      <Pressable onPress={() => router.push("/HomePage")}>
        <Text>Go To Home Page using Push method</Text>
      </Pressable>
      <Pressable onPress={() => router.replace("/HomePage")}>
        <Text>Go To Home Page using Replace method</Text>
      </Pressable>
    </View>
  );
};

export default AboutPage;

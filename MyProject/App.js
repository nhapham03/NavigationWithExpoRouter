import React from "react";
import { View, Text } from "react-native";
import { Link, Router } from "expo-router";

const App = () => {
  return (
    <Router>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>My Expo Router App</Text>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/user/1">User Profile Page with ID 1</Link>
      </View>
    </Router>
  );
};

export default App;

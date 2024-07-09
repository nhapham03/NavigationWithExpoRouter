import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="HomePage"
        options={{
          headerTitle: "Home Page",
        }}
      />
      <Stack.Screen
        name="AboutPage"
        options={{
          headerTitle: "About Page",
        }}
      />
      <Stack.Screen
        name="user/[id]"
        options={{
          headerTitle: "User Page",
        }}
      />
    </Stack>
  );
};

export default Layout;

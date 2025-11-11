import { Tabs } from "expo-router";
import { AntDesign, Feather, EvilIcons, FontAwesome, Ionicons } from "@expo/vector-icons";

const HomeRootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#34967C",
        tabBarInactiveTintColor: "gray",
        headerShown: false, // default: hide header for all tabs
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: true, // only Search shows the top header
          tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: true, // only Saved shows the top header
          tabBarIcon: ({ color }) => <EvilIcons name="heart" size={27} color={color} />,
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          headerShown: true, // only Inbox shows the top header
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-outline" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color="black" />,
          // 👇 notice: no headerShown here, the Profile screen uses its own layout
        }}
      />
    </Tabs>
  );
};

export default HomeRootLayout;

import { Tabs } from 'expo-router';
import React from 'react';
import '../../styles/global.css'; // Tailwind global styles

// import Home from './home'; // Removed because the file does not exist
// import Settings from './settings'; // Example additional tab, replace if needed

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true, // default header for all screens, Profile will override if needed
        tabBarActiveTintColor: '#34967C',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
        }}
      />

      {/* <Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',
        }}
      /> */}
    </Tabs>
  );
};

export default Layout;

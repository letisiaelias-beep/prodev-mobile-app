import React from 'react';
import { Tabs } from 'expo-router';
import '../../styles/global.css'; // Tailwind global styles

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,              // header shown for all tabs
        tabBarActiveTintColor: '#34967C',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#fff' },
      }}
    >
      {/* The 'name' must exactly match the file name in app/(home)/ */}
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
};

export default Layout;

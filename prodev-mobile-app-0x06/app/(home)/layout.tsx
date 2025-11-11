import { Tabs } from 'expo-router';
import React from 'react';
import '../../styles/global.css'; // Correct path to Tailwind styles

import Home from './home'; // Example, replace with actual Home screen
import Profile from './profile';
import Settings from './settings'; // Example, replace with actual Settings screen

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true, // Default header for all tabs
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
        component={Home}
        options={{ title: 'Home' }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile" // must match filename lowercase
        options={{ title: 'Profile' }} // no headerShown here
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="settings"
        component={Settings}
        options={{ title: 'Settings' }}
      />
    </Tabs>
  );
};

export default Layout;

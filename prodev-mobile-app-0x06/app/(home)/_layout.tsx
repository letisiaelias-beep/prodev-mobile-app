import { Tabs } from 'expo-router';
import React from 'react';
import '../../styles/global.css'; // Tailwind global styles

import Home from './home';
import Profile from './profile';
import Settings from './settings'; // Example additional tab, replace if needed

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
        component={Home}
        options={{
          title: 'Home',
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="Profile"
        component={Profile} // no headerShown option here
        options={{
          title: 'Profile',
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
        }}
      />
    </Tabs>
  );
};

export default Layout;

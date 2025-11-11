import { Tabs } from 'expo-router';
import React from 'react';
import '../../styles/global.css'; // Correct path to Tailwind styles

import Profile from './profile';
// Removed Settings import because the settings route should be resolved by the Expo Router file-system routing.
// If you have a Settings component file and want to import it directly, replace this line with:
// import Settings from './settings';

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
        options={{ title: 'Settings' }}
      />
    </Tabs>
  );
};

export default Layout;

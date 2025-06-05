import { Stack, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  return <Tabs >
    <Tabs.Screen 
      name="index" 
      options={{
        title : "My Home - header bar title",
        tabBarLabel : "Home", //this is the label in the tab bar
        // tabBarIcon : () => <FontAwesome name="home" size={24} color="black" />,
        tabBarIcon : ({color,size}) => <Ionicons name="home" size={size} color={color} />,
        // tabBarActiveTintColor : "pink"
      }}
    />
    <Tabs.Screen 
      name="profile"
      options={{
        title : "My Profile - header bar title",
        tabBarLabel : "Profile", //this is the label in the tab bar
        tabBarIcon : ({color,size}) => <Ionicons name="person" size={size} color={color} />
      }}
    />
  </Tabs>;
}

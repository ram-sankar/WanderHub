import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import routes from "./routes";
import Home from '../screens/Home';
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import Favorite from "../screens/Favorite";
import Explore from "../screens/Explore";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [{
          position: 'absolute',
          bottom: 10,
          left: 20,
          right: 20,
          borderRadius: 30,
          height: 50,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 2,
        }]
      }} 
    >
    <Tab.Screen 
      name={routes.HOME}
      component={Home}
      options={{
        tabBarIcon: ({color, size}) => 
          <Ionicons name="ios-home" color={color} size={size} />
      }}  
    />
    <Tab.Screen 
      name={routes.EXPLORE}
      component={Explore}
      options={{
        tabBarIcon: ({color, size}) => 
          <Ionicons name="compass" color={color} size={size} />
      }}  
    />
    <Tab.Screen 
      name={routes.SEARCH}
      component={Search}
      options={{
        tabBarIcon: ({color, size}) => 
          <Ionicons name="search-outline" color={color} size={size} />
      }}  
    />
    <Tab.Screen 
      name={routes.FAVORITE}
      component={Favorite}
      options={{
        tabBarIcon: ({color, size}) => 
          <Ionicons name="heart" color={color} size={size} />
      }}  
    />
    <Tab.Screen 
      name={routes.PROFILE}
      component={Profile}
      options={{
        tabBarIcon: ({color, size}) => 
          <MaterialCommunityIcons name="account" size={size} color={color} />
      }}  
    />
    </Tab.Navigator>
  );
}

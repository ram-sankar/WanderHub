import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import routes from "./routes";
import Home from '../screens/Home';
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import Favorite from "../screens/Favorite";
import ExploreNavigator from "./ExploreNavigator";
import styles from "../constants/styles";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.tabBarStyle]
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
      name={routes.EXPLORE_TAB}
      component={ExploreNavigator}
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

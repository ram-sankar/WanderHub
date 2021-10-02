import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import routes from "./routes";
import Home from '../screens/Home';
import Profile from "../screens/Profile";
import Favorite from "../screens/Favorite";
import ExploreNavigator from "./ExploreNavigator";
import AddContentNavigator from "./AddContentNavigator";
import styles from "../constants/styles";
import AppIcons from "../components/AppIcons";

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
          <AppIcons Icon="Ionicons" name="ios-home" size={size} color={color}/>
      }}  
    />
    <Tab.Screen 
      name={routes.EXPLORE_TAB}
      component={ExploreNavigator}
      options={{
        tabBarIcon: ({color, size}) => 
          <AppIcons Icon="Ionicons" name="compass" size={size} color={color}/>
      }}  
    />
    <Tab.Screen 
      name={routes.ADD_CONTENT_TAB}
      component={AddContentNavigator}
      options={{
        tabBarIcon: ({color, size}) => 
          <AppIcons Icon="AntDesign" name="pluscircle" size={size} color={color}/>
      }}  
    />
    <Tab.Screen 
      name={routes.FAVORITE}
      component={Favorite}
      options={{
        tabBarIcon: ({color, size}) => 
          <AppIcons Icon="Ionicons" name="heart" size={size} color={color}/>
      }}  
    />
    <Tab.Screen 
      name={routes.PROFILE}
      component={Profile}
      options={{
        tabBarIcon: ({color, size}) => 
          <AppIcons Icon="MaterialCommunityIcons" name="account" size={size} color={color}/>
      }}  
    />
    </Tab.Navigator>
  );
}

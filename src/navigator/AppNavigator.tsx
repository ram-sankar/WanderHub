import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import routes from "./routes";
import ExploreNavigator from "./screenNavigators/ExploreNavigator";
import UserPostNavigator from "./screenNavigators/UserPostNavigator";
import AddContentNavigator from "./screenNavigators/AddContentNavigator";
import ProfileNavigator from "./screenNavigators/ProfileNavigator";
import Notifications from "../screens/Notifications";
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
      name={routes.EXPLORE_TAB}
      component={ExploreNavigator}
      options={{
        tabBarIcon: ({color, size}) => 
          <AppIcons Icon="Ionicons" name="ios-home" size={size} color={color}/>
      }}  
    />
    <Tab.Screen 
      name={routes.USER_POST_TAB}
      component={UserPostNavigator}
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
      name={routes.NOTIFICATIONS_TAB}
      component={Notifications}
      options={{
        tabBarIcon: ({color, size}) => 
          <AppIcons Icon="Ionicons" name="notifications" size={size} color={color}/>
      }}  
    />
    <Tab.Screen 
      name={routes.PROFILE_TAB}
      component={ProfileNavigator}
      options={{
        tabBarIcon: ({color, size}) => 
          <AppIcons Icon="MaterialCommunityIcons" name="account" size={size} color={color}/>
      }}  
    />
    </Tab.Navigator>
  );
}

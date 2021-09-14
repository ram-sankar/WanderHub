import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "./routes";
import Home from '../screens/Home';

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
            <MaterialCommunityIcons name="home" color={color} size={size} />
        }}  
      />
    </Tab.Navigator>
  );
}

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import Home from '../screens/Home';
import routes from './routes';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.WELCOME} component={Welcome} />
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

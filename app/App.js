import React from 'react';
import { NavigationContainer } from "@react-navigation/native"

import NavigationTheme from "./navigator/NavigationTheme";
import AuthNavigator from "./navigator/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native"

import NavigationTheme from "./navigator/NavigationTheme";
import AuthNavigator from "./navigator/AuthNavigator";
import AuthContext from "./auth/context";

export default function App() {
  const [user, setUser] = useState();
  console.log(user);
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer theme={NavigationTheme}>
        { user ? null : <AuthNavigator /> }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

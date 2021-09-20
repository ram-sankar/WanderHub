import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import AppLoading from "expo-app-loading";

import NavigationTheme from "./src/navigator/NavigationTheme";
import AuthNavigator from "./src/navigator/AuthNavigator";
import AppNavigator from "./src/navigator/AppNavigator";
import AuthContext from "./src/auth/context";
import authStorage from "./src/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if(user) setUser(user);
    return user;
  }

  if(!isReady) return (
    <AppLoading 
      startAsync={restoreUser} 
      onFinish={() => setIsReady(true)} 
      onError={() => {
        console.warn('Error while retrieving user profile fom cache')
        setIsReady(true)
      }}/>
  )

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer theme={NavigationTheme}>
        { user ? <AppNavigator/> : <AuthNavigator/> }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

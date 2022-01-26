import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import AppLoading from "expo-app-loading";
import ThemeContext from './src/common/ThemeContext';
import { Themes } from './src/constants/models/Common';
import { colors as DefaultColor} from './src/constants/theme';

import NavigationTheme from "./src/navigator/NavigationTheme";
import AuthNavigator from "./src/navigator/screenNavigators/AuthNavigator";
import AppNavigator from "./src/navigator/AppNavigator";
import AuthContext from "./src/auth/context";
import authStorage from "./src/auth/storage";

export default function App() {
  const [user, setUser] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [theme, setTheme] = useState<Themes>(DefaultColor.light);

  const restoreUser = async (): Promise<void> => {
    const user = await authStorage.getUser()
    if(user) setUser(user);
  }

  let {colors}: any = NavigationTheme;
  colors = {
    ...colors, 
    primary: theme.primary,
    text: theme.text,
    border: theme.bg,
    card: theme.bg
  }
  const NavTheme = {...NavigationTheme, colors}
  
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
      <ThemeContext.Provider value={{theme, setTheme}}>
        <NavigationContainer theme={NavTheme}>
          { user ? <AppNavigator/> : <AuthNavigator/> }
        </NavigationContainer>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

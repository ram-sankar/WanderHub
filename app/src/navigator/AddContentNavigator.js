import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute  } from '@react-navigation/native';

import routes from './routes';
import AddContent from "../screens/AddContent";
import styles from "../constants/styles";

const AddContentStack = createNativeStackNavigator();

export default function AddContentNavigator({ navigation, route }) {
  const routeName = getFocusedRouteNameFromRoute (route);
  const tabShouldNotVisible = [routes.PLAN_DETAILS]

  React.useLayoutEffect(() => {
    if (tabShouldNotVisible.includes(routeName)){
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {...styles.tabBarStyle, display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <AddContentStack.Navigator screenOptions={{headerShown: false}} initialRouteName={routes.ADD_CONTENT_SCREEN}>
      <AddContentStack.Screen name={routes.ADD_CONTENT_SCREEN} component={AddContent} />
    </AddContentStack.Navigator>
  );
}

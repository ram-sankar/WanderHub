import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute  } from '@react-navigation/native';

import routes from './routes';
import Explore from "../screens/Explore";
import PlanDetails from '../screens/PlanDetails'
import styles from "../constants/styles";

const ExploreStack = createNativeStackNavigator();

export default function AuthNavigator({ navigation, route }) {
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
    <ExploreStack.Navigator screenOptions={{headerShown: false}} initialRouteName={routes.EXPLORE_SCREEN}>
      <ExploreStack.Screen name={routes.EXPLORE_SCREEN} component={Explore} />
      <ExploreStack.Screen name={routes.PLAN_DETAILS} component={PlanDetails} />
    </ExploreStack.Navigator>
  );
}

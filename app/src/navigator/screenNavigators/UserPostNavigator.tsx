import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute  } from '@react-navigation/native';

import routes from '../routes';
import UserPost from "../../screens/UserPost";
import styles from "../../constants/styles";
import PostDetails from '../../screens/UserPost/PostDetails';

const UserPostStack = createNativeStackNavigator();

export default function AuthNavigator({ navigation, route }: Props) {
  const routeName = getFocusedRouteNameFromRoute (route) || '';
  const tabShouldNotVisible = [routes.POST_DETAILS]

  React.useLayoutEffect(() => {
    if (tabShouldNotVisible.includes(routeName)){
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {...styles.tabBarStyle, display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <UserPostStack.Navigator screenOptions={{headerShown: false}} initialRouteName={routes.USER_POST_SCREEN}>
      <UserPostStack.Screen name={routes.USER_POST_SCREEN} component={UserPost} />
      <UserPostStack.Screen name={routes.POST_DETAILS} component={PostDetails} />
    </UserPostStack.Navigator>
  );
}

interface Props {
  navigation: any, 
  route: any
}
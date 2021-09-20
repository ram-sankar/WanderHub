import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContext } from '@react-navigation/native';

function Avatar({ source, navigateTo="Profile", style }) {
  const navigation = React.useContext(NavigationContext);
  const navigateToPage = () => navigateTo ? navigation.navigate(navigateTo) : null;

  return (
    <TouchableOpacity onPress={navigateToPage} style={style}>
        <Image source={source} style={styles.avatar} />
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 40,
    width: 40
  }
});
export default Avatar;

import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContext } from '@react-navigation/native';

import AppIcons from "../components/AppIcons";
import { colors, sizes } from "../constants/theme";

function BackButton({ style, size = 50, backGround = colors.transparent }) {
  const navigation = React.useContext(NavigationContext);

  return (
    <TouchableOpacity style={[styles.backIconContainer, style]} onPress={() => navigation.pop()}>
        <AppIcons
          Icon="MaterialCommunityIcons"
          name='keyboard-backspace'
          color={colors.black}
          size={size * 0.5}
          style={()=>styles.backIconContainer(backGround, size)}
        />
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backIconContainer: {
    marginLeft: -15,
    marginBottom: 15
  },
  backIcon: (backGround, size) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: backGround,
    justifyContent: "center",
    alignItems: "center",
  })
});
export default BackButton;

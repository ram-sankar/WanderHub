import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import AppIcon from "../components/AppIcon";
import { colors } from "../constants/theme";

function BackButton({ navigation, style, backGround = colors.transparent }) {
  return (
    <TouchableOpacity style={[styles.backIcon, style]} onPress={() => navigation.pop()}>
        <AppIcon
          name='keyboard-backspace'
          backgroundColor={backGround}
          iconColor={colors.black}
          size={52}
        />
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    marginLeft: -15,
    marginBottom: 15
  }
});
export default BackButton;

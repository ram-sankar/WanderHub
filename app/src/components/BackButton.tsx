import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContext } from '@react-navigation/native';

import AppIcons from "./AppIcons";
import { colors } from "../constants/theme";

function BackButton({ style, size = 50, backGround = colors.transparent }: Props) {
  const navigation = React.useContext<any>(NavigationContext);

  return (
    <TouchableOpacity style={[styles.backIconContainer, style]} onPress={() => navigation?.pop()}>
        <AppIcons
          Icon="MaterialCommunityIcons"
          name='keyboard-backspace'
          color={colors.black}
          size={size * 0.5}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: backGround,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backIconContainer: {
    marginLeft: -15,
    marginBottom: 15
  }
});

interface Props {
  style: {},
  size: number,
  backGround: string
}
export default BackButton;
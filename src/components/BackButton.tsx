import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContext } from '@react-navigation/native';

import AppIcons from "./AppIcons";
import ThemeContext from "../common/ThemeContext";
import { ColorValue } from "react-native";

function BackButton({ style, size = 50, backGround }: Props) {
  const { theme } = useContext(ThemeContext);
  const navigation = React.useContext<any>(NavigationContext);
  if (!backGround) { 
    backGround = theme.transparent
  }

  return (
    <TouchableOpacity style={style} onPress={() => navigation?.pop()}>
        <AppIcons
          Icon="MaterialCommunityIcons"
          name='keyboard-backspace'
          color={theme.text}
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

interface Props {
  style?: Object,
  size?: number,
  backGround?: ColorValue
}
export default BackButton;

import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContext } from '@react-navigation/native';

import AppIcons from "./AppIcons";
import { colors } from "../constants/theme";

function BackButton({ style, size = 50, backGround = colors.transparent }: Props) {
  const navigation = React.useContext<any>(NavigationContext);

  return (
    <TouchableOpacity style={style} onPress={() => navigation?.pop()}>
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

interface Props {
  style?: Object,
  size?: number,
  backGround?: string
}
export default BackButton;

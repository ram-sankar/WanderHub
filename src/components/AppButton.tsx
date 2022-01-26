import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import defaultStyles from "../constants/styles";
import ThemeContext from "../common/ThemeContext";
import { Themes } from "../constants/models/Common";

export default function AppButton({title, onPress, color="bg", backgroundColor="primary", style}: Props) {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  
  return (
    <TouchableOpacity
      style={[
        defaultStyles.button,
        { backgroundColor: theme[backgroundColor] },
        style
      ]}
      onPress={onPress}
    >
      <Text style={[defaultStyles.text, styles.buttonText, {color: theme[color]}]}>{title}</Text>
    </TouchableOpacity>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  buttonText: {
    fontWeight: '700',
    letterSpacing: 1
  }
});

interface Props {
  title: string, 
  onPress: Function | any, 
  color?:  keyof Themes,
  backgroundColor?: keyof Themes, 
  style?: Object
}
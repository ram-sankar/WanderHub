import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "../constants/styles";

import defaultStyles from "../constants/styles";
import { colors } from "../constants/theme";

export default function AppButton({title, onPress, color="white", backgroundColor="primary", style}: Props) {
  return (
    <TouchableOpacity
      style={[
        defaultStyles.button,
        { backgroundColor: colors[backgroundColor] },
        style
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, customStyles.buttonText, {color: colors[color]}]}>{title}</Text>
    </TouchableOpacity>
  )
}

const customStyles = StyleSheet.create({
  buttonText: {
    fontWeight: '700',
    letterSpacing: 1
  }
});

interface Props {
  title: string, 
  onPress: Function | any, 
  color?: string,
  backgroundColor?: string, 
  style?: Object
}
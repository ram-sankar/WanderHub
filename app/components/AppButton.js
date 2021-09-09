import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../constants/styles";

import defaultStyles from "../constants/styles";
import { colors } from "../constants/theme";

export default function AppButton({title, onPress, color="white", backgroundColor="primary", style}) {
  return (
    <TouchableOpacity
      style={[
        defaultStyles.button,
        { backgroundColor: colors[backgroundColor] },
        style
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, {color: colors[color]}]}>{title}</Text>
    </TouchableOpacity>
  )
}
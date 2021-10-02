import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../constants/styles";
import { colors } from "../constants/theme";
import AppIcons from "./AppIcons";

function AppTextInput({ icon, width = "100%", containerStyling, style, innerRef, ...otherProps }: Props) {
  return (
    <View style={[styles.container, containerStyling, { width }]}>
      {icon && (
        <AppIcons Icon="MaterialCommunityIcons" size={20} color={colors.gray2} style={styles.icon}/>
      )}
      <TextInput
        ref={innerRef}
        placeholderTextColor={colors.gray2}
        style={[defaultStyles.text, styles.inputStyling, style ]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    color: colors.darkGrey,
    borderRadius: 5,
    flexDirection: "row",
    marginVertical: 10,
    height: 50
  },
  icon: {
    marginRight: 10,
  },
  inputStyling: {
    paddingHorizontal: 20,
    width: '100%'
  }
});

interface Props {
  icon?: string,
  width?: string,
  containerStyling?: {},
  style?: {},
  innerRef?: any,
  [otherProps:string]: any,
}

export default AppTextInput;

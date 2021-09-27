import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../constants/styles";
import { colors } from "../constants/theme";

function AppTextInput({ icon, width = "100%", containerStyling, style, innerRef, ...otherProps }) {
  return (
    <View style={[styles.container, containerStyling, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        ref={innerRef}
        placeholderTextColor={colors.medium}
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

export default AppTextInput;

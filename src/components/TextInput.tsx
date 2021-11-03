import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import defaultStyles from "../constants/styles";
import { colors } from "../constants/theme";
import AppIcons from "./AppIcons";

function AppTextInput({ icon, width = "100%", containerStyling, lines=1, style, innerRef, ...otherProps }: Props) {
  return (
    <View style={[styles.container, containerStyling, { width, height: 30 + lines*18.85 }]}>
      {icon && (
        <AppIcons Icon="MaterialCommunityIcons" size={20} color={colors.gray2} style={styles.icon}/>
      )}
      <TextInput
        ref={innerRef}
        placeholderTextColor={colors.gray2}
        style={[defaultStyles.text, styles.inputStyling, style, { width, height: 20 + lines*18.85 } ]}
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
    height: 50,
    alignItems: 'center'
  },
  icon: {
    marginRight: 10,
  },
  inputStyling: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    textAlignVertical: 'top'
  }
});

interface Props {
  icon?: string,
  width?: string | number,
  height?: string | number,
  containerStyling?: {},
  style?: {},
  innerRef?: any,
  [otherProps:string]: any,
}

export default AppTextInput;

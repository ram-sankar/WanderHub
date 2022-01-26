import React, {useContext} from "react";
import { View, TextInput, StyleSheet } from "react-native";

import AppIcons from "./AppIcons";
import ThemeContext from "../common/ThemeContext";
import { Themes } from "../constants/models/Common";

function AppTextInput({ icon, width = "100%", containerStyling, lines=1, style, innerRef, ...otherProps }: Props) {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);

  return (
    <View style={[styles.container, containerStyling, { width, height: 30 + lines*18.85 }]}>
      {icon && (
        <AppIcons Icon="MaterialCommunityIcons" size={20} color={theme.gray2} style={styles.icon}/>
      )}
      <TextInput
        ref={innerRef}
        placeholderTextColor={theme.gray2}
        style={[styles.inputStyling, style, { width, height: 20 + lines*18.85 } ]}
        {...otherProps}
      />
    </View>
  );
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    backgroundColor: theme.bg,
    color: theme.darkGrey,
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
    color: theme.text,
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

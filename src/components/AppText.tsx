import React, { useContext } from "react";
import { Text, StyleSheet, Platform } from "react-native";

import ThemeContext from "../common/ThemeContext";
import { Themes } from "../constants/models/Common";
import { sizes } from "../constants/theme";

function AppText({ children, style, ...otherProps }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const useStyles = (theme: Themes) => StyleSheet.create({
  text: {
    color: theme.gray4,
    fontSize: sizes.font,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  }
});
interface Props {
  children: React.ReactNode,
  style?: any,
  [otherProps:string]: any,
}

export default AppText;

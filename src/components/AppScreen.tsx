import React, { useContext } from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

import { sizes } from "../constants/theme";
import ThemeContext from "../common/ThemeContext";
import { Themes } from "../constants/models/Common";

function AppScreen({ children, style }: Props) {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);

  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const useStyles = (theme: Themes) => StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBackGround,
    flex: 1,
  },
  view: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: sizes.padding,
  },
});

interface Props {
  children: React.ReactNode,
  style?: Object,
}

export default AppScreen;

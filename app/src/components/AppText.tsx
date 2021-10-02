import React, { FC } from "react";
import { Text } from "react-native";

import defaultStyles from "../constants/styles";

function AppText({ children, style, ...otherProps }: Props): JSX.Element {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

interface Props {
  children: any,
  style?: any,
  [otherProps:string]: any,
}

export default AppText;

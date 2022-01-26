import React from "react";
import { Themes } from "../constants/models/Common";
import { colors } from "../constants/theme";

export default React.createContext<ThemeContextModal>({ theme: colors.light });

interface ThemeContextModal {
  theme: Themes,
  setTheme?: Function
}
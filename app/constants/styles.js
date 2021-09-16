import { Platform } from "react-native";
import { colors, sizes } from "./theme";

export default {
  text: {
    color: colors.darkGrey,
    fontSize: sizes.font,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  button: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "70%",
    marginVertical: 10,
  },
  headingText: {
    fontWeight: '700',
    fontSize: sizes.fontHeading,
    marginBottom: 30
  }
};

import { Platform } from "react-native";
import { colors } from "./theme";

export default {
  text: {
    color: colors.darkGrey,
    fontSize: 18,
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
    fontSize: 30,
    marginBottom: 30
  }
};

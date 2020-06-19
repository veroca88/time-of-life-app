import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.lightOrange,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};

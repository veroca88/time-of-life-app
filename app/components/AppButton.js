import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

function AppButton({ color, title, onPress, style }) {
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel={title}
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors.darkBlue }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.darkPurple,
    borderRadius: 25,
    justifyContent: "center",
    padding: 15,
    marginVertical: 10,
    // width: "50%",
  },
  text: {
    color: colors.lightOrange,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;

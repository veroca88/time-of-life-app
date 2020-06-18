import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/ski.jpeg")}
    >
      <View style={styles.buttonsContainer}>
        <AppButton
          title={"login"}
          color="darkPurple"
          onPress={() => console.log("Clicked")}
        >
          Login
        </AppButton>
        <AppButton
          title={"Register"}
          color="darkPurple"
          onPress={() => console.log("Clicked")}
        >
          Register
        </AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
});

export default WelcomeScreen;

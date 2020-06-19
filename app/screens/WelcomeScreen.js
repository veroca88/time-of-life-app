import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      // source={require("../assets/images/ski.jpeg")}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.text}>T i m e</Text>
        <Text style={styles.textMiddle}>o f</Text>
        <Text style={styles.textFinal}>L i f e . . .</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title={"Login"}
          color="darkPurple"
          onPress={() => console.log("Clicked")}
        >
          Log In
        </AppButton>
        <AppButton
          title={"register"}
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
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.darkBlue,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  text: {
    color: colors.lightOrange,
    fontSize: 35,
  },
  textMiddle: {
    color: colors.lightOrange,
    fontSize: 35,
    left: 100,
  },
  textFinal: {
    color: colors.lightOrange,
    fontSize: 35,
    left: 140,
  },
  titleContainer: {
    position: "absolute",
    top: 100,
    left: 60,
  },
});

export default WelcomeScreen;
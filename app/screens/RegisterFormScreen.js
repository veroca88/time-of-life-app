import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import colors from "../config/colors";
import App from "../../App";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function RegisterFormScreen(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen style={styles.screen}>
      <View>
        <Text style={styles.text}>Welcome to Time of Life!</Text>
      </View>
      <View>
        <TextInput
          style={styles.container}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View>
        <TextInput
          style={styles.container}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View>
        <TextInput
          style={styles.container}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <AppButton
          title={"Submit"}
          color="lightBlue"
          style={styles.buttonSubmit}
          onPress={() => console.log("Clicked")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonSubmit: {
    width: "50%",
    marginTop: 60,
    marginLeft: 90,
    color: colors.mediumDarkBlue,
  },
  container: {
    backgroundColor: colors.darkBlue,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    marginTop: 30,
    padding: 15,
    marginVertical: 10,
  },
  screen: {
    padding: 20,
    backgroundColor: colors.mediumDarkBlue,
    width: "100%",
  },
  text: {
    fontSize: 28,
    color: colors.lightBlue,
    textAlign: "center",
    paddingTop: 80,
    paddingBottom: 40,
    padding: 20,
  },
});

export default RegisterFormScreen;

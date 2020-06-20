import React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppForm from "../components/AppForm";
import AppTextFormField from "../components/AppTextFormField";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function RegisterFormScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <View>
          <AppText style={styles.text}>Welcome!!!</AppText>
        </View>
        <AppTextFormField
          name="name"
          icon="face-profile"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Name"
          placeholderTextColor={colors.blueMarine}
        />
        <AppTextFormField
          name="email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor={colors.blueMarine}
        />
        <AppTextFormField
          icon="lock"
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          placeholderTextColor={colors.blueMarine}
          secureTextEntry
        />
        <SubmitButton style={styles.buttonSubmit} title="Submit" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonSubmit: {
    width: "50%",
    marginTop: 60,
    marginLeft: 90,
    backgroundColor: colors.yellowGreen,
  },
  screen: {
    padding: 40,
    backgroundColor: colors.blueMarine,
  },
  text: {
    color: colors.yellowGreen,
    fontSize: 28,
    textAlign: "center",
    paddingTop: 80,
    paddingBottom: 40,
    padding: 20,
  },
});

export default RegisterFormScreen;

import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";

import Screen from "../components/Screen";
import AppFormField from "../components/AppTextFormField";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppFormPicker from "../components/AppFormPicker";
import AppForm from "../components/AppForm";
import AppTextInput from "../components/AppTextInput";
import PickerItem from "../components/PickerItem";

// const validationSchema = Yup.object().shape({
//   price: Yup.number().required().min(1).max(10000).label("Price"),
//   amount: Yup.number().label("Description"),
//   category: Yup.string().required().nullable().label("Categoty"),
// });

const categories = [
  {
    label: "By hour",
    value: 1,
    backgroundColor: "#029DAF",
    icon: "circle-slice-1",
  },
  {
    label: "By day",
    value: 2,
    backgroundColor: "#E5D599",
    icon: "circle-slice-5",
  },
  {
    label: "By month",
    value: 3,
    backgroundColor: "#F07C19",
    icon: "circle-slice-8",
  },
];

function CalculationScreen(props) {
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  // const [result, setResult] = useState("");
  const [result, setResult] = useState(0);

  const resultButton = () => {
    const calculation = price / amount;
    setResult(calculation);
  };

  return (
    <Screen style={styles.screen}>
      <AppText style={styles.text}>
        When we buy something, we're not paying with money. We're paying with
        the time from our lives we had to spend to earn that money! Jose Mujica.
      </AppText>
      <View style={styles.container}>
        <AppText>How much you earn un one hour?</AppText>
        <AppTextInput
          icon="timer"
          onChangeText={(value) => setAmount(value)}
          style={styles.inputs}
          placeholderTextColor={colors.blueMarine}
          width="50%"
        />
        <AppText>How much the item cost?</AppText>
        <AppTextInput
          icon="cash-multiple"
          onChangeText={(value) => setPrice(value)}
          style={styles.inputs}
          placeholderTextColor={colors.blueMarine}
          width="50%"
        />

        <AppButton
          color="yellowGreen"
          style={styles.resultButton}
          title="Calculate"
          onPress={resultButton}
        />
      </View>
      <AppText style={styles.textResult}>
        You have to spend {result} hours of your life!!
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  inline: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
  middleButton: {
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
  },
  resultButton: {
    width: "50%",
    alignSelf: "center",
    marginBottom: 0,
  },
  screen: {
    backgroundColor: colors.blueMarine,
  },
  smallButton: {
    width: "40%",
    backgroundColor: colors.yellowGreen,
    marginVertical: 20,
    margin: 20,
    padding: 0,
  },
  text: {
    color: colors.yellowGreen,
    fontSize: 18,
    textAlign: "center",
    paddingTop: 80,
    paddingBottom: 40,
    padding: 20,
  },
  textResult: {
    color: colors.orange,
    fontSize: 30,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 40,
    padding: 20,
  },
});

export default CalculationScreen;

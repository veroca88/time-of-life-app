import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";

import AppForm from "../components/AppForm";
import Screen from "../components/Screen";
import AppTextFormField from "../components/AppTextFormField";
import AppText from "../components/AppText";
import AppFormPicker from "../components/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import SubmitButton from "../components/SubmitButton";

const inputFormSchema = Yup.object().shape({
  amount: Yup.number().required().min(3).max(9).label("Amount"),
  typeOf: Yup.string().required().label("Type"),
  price: Yup.number().required().min(3).max(10).label("Price"),
});

const categories = [
  {
    label: "By hour",
    value: 1,
    backgroundColor: "#029DAF",
    icon: "circle-slide-1",
  },
  {
    label: "By day",
    value: 2,
    backgroundColor: "#E5D599",
    icon: "circle-slide-5",
  },
  {
    label: "By month",
    value: 3,
    backgroundColor: "#F07C19",
    icon: "circle-slide-8",
  },
];

function CalculationScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{ amount: "", typeOf: "", price: "" }}
        validationSchema={inputFormSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppText style={styles.text}>
          When we buy something, we're not paying with money. We're paying with
          the time from our lives we had to spend to earn that money! Jose
          Mujica.
        </AppText>

        <AppTextFormField
          name="price"
          icon="cash-multiple"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="How much the item cots?"
          placeholderTextColor={colors.blueMarine}
        />
        <AppTextFormField
          name="amount"
          icon="cash-multiple"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="How much do you earn?"
          placeholderTextColor={colors.blueMarine}
        />
        <AppFormPicker
          items={categories}
          name="typeOf"
          numberOfColumns={3}
          placeholder="Type of Amount"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.blueMarine,
    padding: 30,
  },
  text: {
    color: colors.yellowGreen,
    fontSize: 24,
    textAlign: "center",
    paddingTop: 80,
    paddingBottom: 40,
    padding: 20,
  },
});

export default CalculationScreen;

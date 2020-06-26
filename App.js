import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import RegisterFormScreen from "./app/screens/RegisterFormScreen";
import CalculationScreen from "./app/screens/CalculationScreen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

import Screen from "./app/components/Screen";

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

export default function App() {
  // return <RegisterFormScreen />;
  // return <WelcomeScreen />;
  return <CalculationScreen />;
  // return (
  //   <Screen>
  //     <AppPicker items={categories} icon="apps" placeholder="Category" />
  //     <AppTextInput icon="email" placeholder="Email" />
  //   </Screen>
  // );
}

import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";

function ErrorMessage({ error }) {
  !error ? null : <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;

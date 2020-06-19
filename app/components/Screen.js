import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;

import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.text} onPress={onPress}>
      <AppText>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;

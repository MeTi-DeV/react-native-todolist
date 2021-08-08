import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [entredGoal, setEntredGoal] = useState("");
  const goalInputHandler = (textentered) => {
    setEntredGoal(textentered);
  };
  return (
    <View Stytle={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput}
        value={entredGoal}
        onChange={goalInputHandler} />
        <Button style={styles.Button} title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Littlegolas: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "#000",
    borderWidth: 1,
  },
  TextInput: {
    padding: 20,
    width: "80%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

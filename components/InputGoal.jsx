import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableNativeFeedback
} from "react-native";
const InputGoal=props=>{

return (
    <TextInput
    placeholder={"Enter Some Text"}
    onChangeText={props.goalhandler}
    value={props.entered}
    style={styles.TextInput}
  />
)}
const styles = StyleSheet.create({
    TextInput: {
        padding: 20,
        width: "80%",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
      },
  });
  
export default InputGoal;
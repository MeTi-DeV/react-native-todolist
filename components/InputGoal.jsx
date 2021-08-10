import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
  TouchableNativeFeedback,
} from "react-native";
const InputGoal = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredTexT) => {
    setEnteredGoal(enteredTexT);
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View>
        <TextInput
          placeholder={"Enter Some Text"}
          onChangeText={goalInputHandler}
          value={enteredGoal}
          style={styles.TextInput}
        />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  Screen:{
padding:50
  },
  TextInput: {
    padding: 20,
    width: "80%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  
});

export default InputGoal;

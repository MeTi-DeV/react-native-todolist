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
  const addGoalHandler=()=>{
      props.onAddGoal(enteredGoal)
      setEnteredGoal('');
  }

  return (
    <Modal visible={props.onVisible} animationType="slide">
      <View>
        <TextInput
          placeholder={"Enter Some Text"}
          onChangeText={goalInputHandler}
          value={enteredGoal}
          style={styles.TextInput}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
        <Button style="button" title="ADD" onPress={addGoalHandler} /></View>
        <View style={styles.button}>
        <Button style="button" title="CAMCEL" color="red" onPress={props.onCancel} /></View></View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  Screen:{
padding:50
  },
  TextInput: {
      justifyContent: 'center',
      alignItems: 'center',
    padding: 20,
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
buttonContainer: {
    marginTop:40,
      width :"100 %",
      justifyContent:"space-around",
      alignContent:'center',
      flexDirection:"row"
  },
  button: {
      width:"40%"
  }

});

export default InputGoal;
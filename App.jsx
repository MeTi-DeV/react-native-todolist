
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {

  const [courseGoal, setCourseGoal] = useState([]);
  const [isModalVisible, setIsModalVisble] = useState(false);
  const addGoalHandler = (goalTitle) => {
    setCourseGoal((currentGoal) => [
      ...courseGoal,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsModalVisble(false)
  };
  const removeGoalHandler = (goalid) => {
    setCourseGoal((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== goalid);
    });
  const [entredGoal, setEntredGoal] = useState("");
  const goalInputHandler = (textentered) => {
    setEntredGoal(textentered);


  };

  return (
    <View stytle={Styles.Screen}>
      <View style={Styles.inputContainer}>
        <Button
          style={Styles.Moadalbutton}
          title="ADD NEW GOAL"
          onPress={() => setIsModalVisble(true)}
        />
        <InputGoal onAddGoal={addGoalHandler} visible={isModalVisible} />
    <View Stytle={styles.screen}>
      <View style={styles.inputContainer}>

       <InputGoal entered={enteredGoal}
       goalhandler={goalInputHandler}/>
        <Button onPress={addGoalHandler}  title="ADD" />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => (
          <ItemGoal
            title={itemData.item.value}
            onDelete={removeGoalHandler}
            id={itemData.item.id}
          />
        )}
      />

        <TextInput style={styles.TextInput}
        value={entredGoal}
        onChange={goalInputHandler} />
        <Button style={styles.Button} title="ADD" />
      </View>

    </View>
  );
}

const Styles = StyleSheet.create({
  Screen: {
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
  Moadalbutton: {
    width:100,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },


  TextInput: {
    padding: 20,
    width: "80%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },

});

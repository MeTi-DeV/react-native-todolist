import React, { useState } from "react";
import ItemGoal from "./components/ItemGoal";
import InputGoal from "./components/InputGoal";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
// import ItemGoal from "./components/ItemGoal";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);
  const goalInputHandler = (textentered) => {
    setEnteredGoal(textentered);
  };
  const addGoalHandler = () => {
    setCourseGoal((currentGoal) => [
      ...courseGoal,
      { id: Math.random().toString(), value:  enteredGoal  },
    ]);
  };
  const removeGoalHandler = (goalid) => {
    setCourseGoal(currentGoal=>{
      return currentGoal.filter(goal=>goal.id !== goalid)
    });
    
  };
  return (
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
  
});

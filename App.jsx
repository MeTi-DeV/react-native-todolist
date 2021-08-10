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
});

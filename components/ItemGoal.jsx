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
const ItemGoal=props=>{

return (
<TouchableNativeFeedback onPress={props.onDelete.bind(this ,props.id)}>
    <View style={styles.Littlegolas}>
    <Text>{props.title}</Text>
  </View></TouchableNativeFeedback>
)}
const styles = StyleSheet.create({
   
   
    Littlegolas: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: "#ccc",
      borderColor: "#000",
      borderWidth: 1,
    },
   
  });
  
export default ItemGoal;
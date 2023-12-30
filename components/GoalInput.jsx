import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoal === "") {
      return;
    }
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your goal course"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="#f31282" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  textInput: {
    width: "100%",
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderWidth: 1,
    borderRadius: 6,
    padding: 16,
    color: "#120438",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  button: {
    width: 100,
  },
});

export default GoalInput;

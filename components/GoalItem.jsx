import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, onDelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDelete(item.id)}
        android_ripple={{ color: "#210664" }}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    color: "#fff",

    margin: 8,
    borderRadius: 4,
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
});

export default GoalItem;

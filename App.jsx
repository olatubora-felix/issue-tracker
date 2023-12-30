import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const startModalHandler = () => {
    setModalIsVisible(true);
  };

  const endModalHandler = () => {
    setModalIsVisible(false);
  };
  const addGoalHandler = (enteredGoal) => {
    // console.log(enteredGoal);
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        text: enteredGoal,
      },
    ]);
    endModalHandler();
  };

  const deleteGoalHandler = (goalId) => {
    // console.log("To be deleted: ");
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={startModalHandler}
          color="#5e0acc"
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endModalHandler}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem item={itemData.item} onDelete={deleteGoalHandler} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalContainer: {
    flex: 5,
  },
});

import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { GameBoard } from "./src/GameBoard";

export default function App() {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match Game</Text>
      <View style={styles.gameBoard}>
        <GameBoard incrementScore={incrementScore} />
      </View>
      <View style={styles.score}>
        <Text style={styles.scoreTxt}>Score: {score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "mediumpurple",
  },
  title: {
    backgroundColor: "violet",
    flex: 0.07,
    marginRight: 5,
    marginLeft: 5,
    fontSize: 25,
    color: "white",
    textAlign: "center",
    paddingTop: 15,
  },
  gameBoard: {
    flex: 0.8,
    backgroundColor: "violet",
    margin: 5,
  },
  score: {
    backgroundColor: "violet",
    flex: 0.07,
    marginRight: 5,
    marginLeft: 5,
  },
  scoreTxt: {
    backgroundColor: "violet",
    marginRight: 5,
    marginLeft: 5,
    fontSize: 25,
    color: "white",
    textAlign: "center",
    paddingTop: 10,
  },
});

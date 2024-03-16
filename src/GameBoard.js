import React, { useRef, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Card } from "./Card";

// const cardVals = [
//   ["A", "B", "C", "D"],
//   ["D", "E", "F", "G"],
//   ["A1", "B1", "C1", "D1"],
//   ["D1", "E1", "F1", "G1"],
// ];

export const GameBoard = ({ onClick, clickVal }) => {
  const [cards, setCards] = useState([
    [
      { name: "A", flipped: false },
      { name: "B", flipped: false },
      { name: "C", flipped: false },
      { name: "D", flipped: false },
    ],
    [
      { name: "D", flipped: false },
      { name: "E", flipped: false },
      { name: "F", flipped: false },
      { name: "G", flipped: false },
    ],
    [
      { name: "A1", flipped: false },
      { name: "B1", flipped: false },
      { name: "C1", flipped: false },
      { name: "D1", flipped: false },
    ],
    [
      { name: "D1", flipped: false },
      { name: "E1", flipped: false },
      { name: "F1", flipped: false },
      { name: "G1", flipped: false },
    ],
  ]);

  const handleFlip = (i, j) => {
    let copyOfCards = [...cards];
    copyOfCards[i][j].flipped = !copyOfCards[i][j].flipped;
    setCards(copyOfCards);
  };
  return (
    <View style={styles.container}>
      {cards.map((row, i) => {
        return (
          <View key={i} style={styles.row}>
            {row.map((cardVal, j) => {
              return (
                <TouchableOpacity
                  key={j}
                  onPress={() => handleFlip(i, j)}
                  value={cardVal.name}
                >
                  <Card value={cardVal.name} isFlipped={cardVal.flipped} />
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};
//

//  </TouchableOpacity>

const styles = StyleSheet.create({
  cardText: {
    fontSize: 25,
    color: "purple",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "yellow",
    // flexDirection: "row",
    //flexWrap: "wrap",
  },
  row: {
    flex: 0.3,
    backgroundColor: "blue",
    flexDirection: "row",
    //flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#7ca1b4",
    flex: 1,
    margin: 5,
    justifyContent: "center",
    width: 85,
    alignItems: "center",
  },
  cardBack: {
    flex: 1,
    width: 85,
  },
});

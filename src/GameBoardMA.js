import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Card } from "./Card";

const cardVals = [
  ["A", "B", "C", "D"],
  ["D", "E", "F", "G"],
  ["A1", "B1", "C1", "D1"],
  ["D1", "E1", "F1", "G1"],
];

export const GameBoard = ({ onClick, clickVal }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  let status = isFlipped;
  console.log(isFlipped);
  return (
    <View style={styles.container}>
      {cardVals.map((row, i) => {
        // console.log(row);
        return (
          <View key={i} style={styles.row}>
            {row.map((cardVal, j) => {
              return (
                <TouchableOpacity
                  key={j}
                  onPress={() => {
                    status = !isFlipped;
                    setIsFlipped(status);
                    console.log({ cardVal });
                    console.log({ status });
                  }}
                  value={cardVal}
                >
                  <Card value={cardVal} isFlipped={status} />
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

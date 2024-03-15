import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

export const Card = ({ value, onClick, isFlipped }) => {
  return isFlipped ? (
    <View style={styles.card}>
      <Text style={styles.cardText}>{value}</Text>
    </View>
  ) : (
    <View style={styles.card}>
      <Image style={styles.cardBack} source={require("./cardBack.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginLeft: 5,
    marginRight: 5,
  },
  cardText: {
    fontSize: 25,
    color: "purple",
    fontWeight: "bold",
  },
});

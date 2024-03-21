import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

export const Card = ({ value, isFlipped }) => {
  return isFlipped ? (
    <View style={styles.card}>
      <Text style={styles.cardText}>{value}</Text>
    </View>
  ) : (
    <View style={styles.card}>
      <Image
        style={styles.cardBack}
        source={require("./images/purpleCardBack.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "lightskyblue",
    flex: 1,
    margin: 5,
    justifyContent: "center",
    width: 85,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gold",
  },
  cardBack: {
    flex: 1,
    width: 82,
    marginLeft: 5,
    marginRight: 5,
  },
  cardText: {
    fontSize: 20,
    color: "mediumpurple",
    fontWeight: "bold",
  },
});

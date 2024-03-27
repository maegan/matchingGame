import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Card } from "./Card";

export const GameBoard = ({ incrementScore, decrementScore }) => {
  const [cards, setCards] = useState([
    [
      { name: "Mom", flipped: false, matched: false },
      { name: "Dad", flipped: false, matched: false },
      { name: "Mimi", flipped: false, matched: false },
      { name: "Opa", flipped: false, matched: false },
    ],
    [
      { name: "Emilia", flipped: false, matched: false },
      { name: "Maddie", flipped: false, matched: false },
      { name: "Jacob", flipped: false, matched: false },
      { name: "God", flipped: false, matched: false },
    ],
    [
      { name: "Mom", flipped: false, matched: false },
      { name: "Dad", flipped: false, matched: false },
      { name: "Mimi", flipped: false, matched: false },
      { name: "Opa", flipped: false, matched: false },
    ],
    [
      { name: "Emilia", flipped: false, matched: false },
      { name: "Maddie", flipped: false, matched: false },
      { name: "Jacob", flipped: false, matched: false },
      { name: "God", flipped: false, matched: false },
    ],
  ]);

  // used to hold the location of last card flipped [i, j]
  const cardRef = useRef(null);

  //////////////////////////////////
  // useEffect runs anytime something is rendered
  //////////////////////////////////
  useEffect(() => {
    let copyOfCards = [...cards];
    let flatCards = copyOfCards.flat(); // turn 2D array to single
    let i = flatCards.length;

    // starts at end of list and runs to beginning
    // generates a random number between 0 and length of list
    // swap the two numbers
    // continue until you hit end of list
    while (--i) {
      var j = Math.floor(Math.random() * (i + 1));
      var tempi = flatCards[i];
      var tempj = flatCards[j];
      flatCards[i] = tempj;
      flatCards[j] = tempi;
    }

    // push the randomized cards back into new list in groups of 4
    let newCards = [];
    while (flatCards.length) newCards.push(flatCards.splice(0, 4));

    // set our list of cards to this new list
    setCards(newCards);
  }, []);

  //////////////////////////////////
  // handleFlip runs whenever a card is pressed
  // given the coordinates of card
  // checks to see if it's ready to be matched and if so,
  // does it match
  //////////////////////////////////
  const handleFlip = (i, j) => {
    // if it has not already been part of a match or is already flipped
    if (!cards[i][j].matched && !cards[i][j].flipped) {
      //  create a working copy of the cards to eventually send to setCards
      let copyOfCards = [...cards];

      // if a card hasn't already been flipped, then set as
      // current flipped card
      if (cardRef.current === null) {
        cardRef.current = [i, j];
      } else {
        // otherwise compare the two
        // need to get the coorsponding coordinates of
        // already flipped card stored in ci and cj
        let ci = cardRef.current[0];
        let cj = cardRef.current[1];

        // get the value of past card
        let storedCard = copyOfCards[ci][cj];

        // if names match and new card hasn't been flipped yet...
        // can't you move this to beginning?
        if (storedCard.name === copyOfCards[i][j].name) {
          // found a match, incrememt score, mark as matched,
          // set current card back to null
          incrementScore();
          storedCard.matched = true; // why?
          copyOfCards[i][j].matched = true;
          cardRef.current = null;
        } else {
          // no match, so have to flip two current cards back over (after
          // given time) and set current card back to null
          let temp = cardRef.current;
          setTimeout(() => {
            handleMiss(i, j, ci, cj);
          }, 1000);
          cardRef.current = null;
        }
      }

      // changed this line because it allowed you to keep clicking on a card
      //copyOfCards[i][j].flipped = !copyOfCards[i][j].flipped;

      // flips the card and then set cards to same values as our working copy
      copyOfCards[i][j].flipped = true;
      setCards(copyOfCards);
    }
  };

  //////////////////////////////////
  // handleMiss runs whenever a match is not made
  // given the coordinates of both cards
  // reset the flipped props of the specified cards
  //////////////////////////////////
  const handleMiss = (c1i, c1j, c2i, c2j) => {
    // create working copy of cards to eventually send to setCards
    let copyOfCards = [...cards];
    let card1 = copyOfCards[c1i][c1j];
    let card2 = copyOfCards[c2i][c2j];

    // reset the flipped values back to false and then call setCards
    card1.flipped = false;
    card2.flipped = false;
    setCards(copyOfCards);
    decrementScore();
  };

  //  ***************************  main part of function ***************** //
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
                  style={styles.rowObj}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardText: {
    fontSize: 25,
    color: "purple",
    fontWeight: "bold",
  },
  row: {
    flex: 0.3,
    backgroundColor: "mediumpurple",
    flexDirection: "row",
  },
  rowObj: {
    flex: 0.25, // needed so they take up the correct amount of space
  },
});

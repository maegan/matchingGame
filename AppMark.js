import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

//const Button = () => <View style={styles.button} />

export default function App() {
  const [startTime, setStartTime] = useState(null);
  const [currTime, setCurrTime] = useState(0);
  const [lapTimes, setLapTimes] = useState([]);
  //let [running, setRunning] = useState(false);
  let [running, setRunning] = useState(0);
  let interval = useRef(null);
  let lapTimeList;

  function handleStart() {
    setStartTime(Date.now());
    setCurrTime(Date.now());

    clearInterval(interval.current);
    interval.current = setInterval(() => {
      setCurrTime(Date.now());
    }, 1000);
  }

  let secondsPassed = (currTime - startTime) / 1000;
  if (startTime != null && currTime != null) {
    secondPassed = (currTime - startTime) / 1000;
  }

  function startTimer() {
    if (!running) {
      // clearInterval(interval);
      // setRunning(false);
      // console.log('Timer Stopped');
      // return;

      interval.current = setInterval(
        () => setCurrTime((prevTime) => prevTime + 1),
        1000
      );
      setRunning(1);
      console.log("Timer Started");
    }
  }

  function stopTimer() {
    console.log("Start of stopTimer");

    if (running) {
      console.log("Inside if (running) statement");
      clearInterval(interval.current);
      setRunning(0);
      console.log("Timer Stopped");
    }
  }

  function resetTimer() {
    clearInterval(interval);
    setRunning(false);
    setCurrTime(0);
    console.log("Timer Reset");
  }

  function addLap() {
    console.log("Lap Added, Time: " + currTime + " seconds");
    setLapTimes([...lapTimes, currTime]);
    console.log(lapTimes);
  }

  return (
    <View style={styles.container}>
      <View style={styles.timeArea}>
        <Text style={styles.timeText}>{currTime}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={startTimer}>
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={stopTimer}>
        <Text style={styles.text}>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={resetTimer}>
        <Text style={styles.text}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={addLap}>
        <Text style={styles.text}>Lap</Text>
      </TouchableOpacity>
      <View style={styles.lapTimes}>
        <Text style={styles.lapTitleText}>Lap Times</Text>

        {lapTimes.map((lapTime, index) => (
          <Text key={index}>{lapTime}</Text>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef",
    alignItems: "center",
    justifyContent: "center",
  },
  timeArea: {
    width: 250,
    height: 75,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 10,
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  timeText: {
    fontSize: 36,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    // alignContent: 'center',
    // justifyContent: 'center',
  },
  lapTimes: {
    flex: 0.5,
    width: 250,
    height: 100,
    backgroundColor: "green",
    alignItems: "baseline stretch",
    justifyContent: "center",
    margin: 10,
    padding: 10,
  },
  lapTitleText: {
    fontSize: 30,
    alignItems: "center",
    justifyContent: "flex-start",
    color: "white",
    fontWeight: "bold",
  },
  lapText: {
    fontSize: 12,
    alignItems: "baseline",
    justifyContent: "center",
    color: "white",
  },
});

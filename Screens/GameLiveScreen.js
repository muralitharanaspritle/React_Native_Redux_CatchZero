import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import GameStyles from "../Components/GameStyles";
const GameLiveScreen = () => {
  return (
    <View style={GameStyles.container}>
      <Text style={GameStyles.liveScore}>Live Score:</Text>
      <TouchableOpacity style={GameStyles.randomNumberContainer}>
        <Text style={GameStyles.randomNumber}>0</Text>
      </TouchableOpacity>
      <View style={GameStyles.timerContainer}>
        <Text style={GameStyles.timer}></Text>
      </View>
      <View style={GameStyles.timerContainer}>
        <Text style={GameStyles.timeFormat}>mm:ss</Text>
      </View>
      {/* <TouchableOpacity onPress={() => stop()}> 
        <Text style={[GameStyles.stopButton]}>Stop</Text> 
      </TouchableOpacity> */}
      <TouchableOpacity>
        <Text style={[GameStyles.startButton]}>Start</Text>
      </TouchableOpacity> 
    </View>
  );
};



export default GameLiveScreen;

const styles = StyleSheet.create({});

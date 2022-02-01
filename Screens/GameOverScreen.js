import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import GameStyles from "../Components/GameStyles";
import { resetAll } from "../Redux/Action";
import { useNavigation } from "@react-navigation/native";
useNavigation;
const GameOverScreen = (props) => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log(props);
  }, []);

  const resetAllData = () => {
    props.resetAll();
    navigation.navigate("Gamelive");
  };
  return (
    <View style={GameStyles.container}>
      <Text style={GameStyles.gameOverText}>Game Over !!</Text>
      <Text style={GameStyles.scoreText}>You Scored {props.score}</Text>
      <View style={GameStyles.totalView}>
        <Text style={GameStyles.totalText}>
          Total Numbers displayed {props.totalRandomNumbersGenerated}
        </Text>
        <Text style={GameStyles.totalText}>
          Total Numbers skipped {props.totalNumberSkipped}
        </Text>
        <Text style={GameStyles.totalText}>
          Total Numbers clicked {props.totalNumberClicked}
        </Text>
        <Text style={GameStyles.totalText}>
          Total zeros displayed {props.totalNumberOfZero}
        </Text>
      </View>
      <TouchableOpacity onPress={() => resetAllData()}>
        <Text style={GameStyles.startButton}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    score: state.score,
    totalNumberClicked: state.totalNumberClicked,
    totalRandomNumbersGenerated: state.totalRandomNumbersGenerated,
    totalNumberSkipped: state.totalNumberSkipped,
    totalNumberOfZero: state.totalNumberOfZero,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetAll: () => dispatch(resetAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOverScreen);

const styles = StyleSheet.create({});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import GameStyles from "../Components/GameStyles";
import { useNavigation } from "@react-navigation/native";
import {
  HIGHEST_RANDOM_NUMBER,
  INTERVAL_BETWEEN_RANDOM_NUMBER_GENERATOR,
  LOWEST_RANDOM_NUMBER,
  SCORE_FOR_CLICKING_NON_ZERO,
  SCORE_FOR_CLICKING_ZERO,
  SCORE_FOR_SKIPPING_NON_ZERO,
  SCORE_FOR_SKIPPING_ZERO,
  TIME_GAP_BETWEEN_TWO_RANDOM_NUMBER,
  TOTAL_GAME_TIME,
} from "../generalData/generalData";
import {
  scoreClickNonZero,
  scoreClickZero,
  scoreSkipNonZero,
  scoreSkipZero,
} from "../Redux/Action";
import { connect } from "react-redux";

const GameLiveScreen = (props) => {
  console.log(props.score);
  const [liveScore, setLiveScore] = useState(0);
  const [totalGameTime, setTotalGameTime] = useState(TOTAL_GAME_TIME);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [randomNumber, setRandomNumber] = useState("");
  const [gameTimerInterval, setGameTimerInterval] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const navigation = useNavigation();
  let randomCreater = "";

  useEffect(() => {
    if (isGameStarted) {
      randomNumberGenerator();
    }
  }, [totalGameTime]);

  const scoreCalculation = () => {
    console.log(randomNumber);
    if (randomNumber === LOWEST_RANDOM_NUMBER && isClicked) {
      //setLiveScore((prevState) => prevState + SCORE_FOR_CLICKING_ZERO);
      props.scoreClickZero();
    } else if (randomNumber === LOWEST_RANDOM_NUMBER && isClicked === false) {
      //setLiveScore((prevState) => prevState + SCORE_FOR_SKIPPING_ZERO);
      props.scoreSkipZero();
    } else if (randomNumber > LOWEST_RANDOM_NUMBER && isClicked) {
      //setLiveScore((prevState) => prevState + SCORE_FOR_CLICKING_NON_ZERO);
      props.scoreClickNonZero();
    } else if (randomNumber > LOWEST_RANDOM_NUMBER && isClicked === false) {
      //setLiveScore((prevState) => prevState + SCORE_FOR_SKIPPING_NON_ZERO);
      props.scoreSkipNonZero();
    } else {
      console.log("nothing");
    }
    setIsClicked(false);
  };

  const randomNumberGenerator = () => {
    console.log(totalGameTime);
    if (totalGameTime === 0) {
      clearInterval(gameTimerInterval);
      //navigate to gameover
      navigation.navigate("GameOver");
    }
    if (totalGameTime % INTERVAL_BETWEEN_RANDOM_NUMBER_GENERATOR === 0) {
      randomCreater = Math.floor(
        Math.random() * (HIGHEST_RANDOM_NUMBER - LOWEST_RANDOM_NUMBER)
      );
      setRandomNumber(randomCreater);
    } else if (
      totalGameTime % INTERVAL_BETWEEN_RANDOM_NUMBER_GENERATOR ===
      TIME_GAP_BETWEEN_TWO_RANDOM_NUMBER
    ) {
      scoreCalculation();
      setRandomNumber("");
    }
  };

  const start = () => {
    setIsGameStarted(true);
    randomNumberGenerator();
    setGameTimerInterval(
      setInterval(() => {
        setTotalGameTime((prevState) => prevState - 1);
      }, 1000)
    );
  };

  const stop = () => {
    setIsGameStarted(false);
    clearInterval(gameTimerInterval);
  };

  return (
    <View style={GameStyles.container}>
      {/* <Text style={GameStyles.liveScore}>Live Score:{liveScore}</Text> */}
      <Text style={GameStyles.liveScore}>Live Score:{props.score}</Text>

      <TouchableOpacity
        style={GameStyles.randomNumberContainer}
        onPress={() => {
          console.log("clicked");
          setIsClicked(true);
        }}
      >
        <Text style={GameStyles.randomNumber}>{randomNumber}</Text>
      </TouchableOpacity>
      <View style={GameStyles.timerContainer}>
        <Text style={GameStyles.timer}>
          {Math.trunc(totalGameTime / 60)
            .toString()
            .padStart(2, 0)}{" "}
          :{" "}
          {Math.trunc(totalGameTime % 60)
            .toString()
            .padStart(2, 0)}
        </Text>
      </View>
      <View style={GameStyles.timerContainer}>
        <Text style={GameStyles.timeFormat}>mm:ss</Text>
      </View>
      {isGameStarted ? (
        <TouchableOpacity onPress={() => stop()}>
          <Text style={[GameStyles.stopButton]}>Stop</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => start()}>
          <Text style={[GameStyles.startButton]}>Start</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    scoreClickZero: () => dispatch(scoreClickZero()),
    scoreClickNonZero: () => dispatch(scoreClickNonZero()),
    scoreSkipZero: () => dispatch(scoreSkipZero()),
    scoreSkipNonZero: () => dispatch(scoreSkipNonZero()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameLiveScreen);

const styles = StyleSheet.create({});

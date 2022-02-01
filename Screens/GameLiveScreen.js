import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import GameStyles from "../Components/GameStyles";
import { useNavigation } from "@react-navigation/native";
import {
  HIGHEST_RANDOM_NUMBER,
  INTERVAL_BETWEEN_RANDOM_NUMBER_GENERATOR,
  LOWEST_RANDOM_NUMBER,
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
  const [totalGameTime, setTotalGameTime] = useState(TOTAL_GAME_TIME);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [randomNumber, setRandomNumber] = useState("");
  const [gameTimerInterval, setGameTimerInterval] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [wrongClickedColor, setWrongClickedColor] = useState("black");
  const [lastTenSecondsColor, setLastTenSecondsColor] = useState("black");
  const navigation = useNavigation();
  let randomCreater = "";

  useEffect(() => {
    if (isGameStarted) {
      randomNumberGenerator();
    }
  }, [totalGameTime]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setLastTenSecondsColor("black");
      setRandomNumber("");
    });
    return unsubscribe;
  });

  const scoreCalculation = () => {
    setWrongClickedColor("black");
    if (randomNumber === LOWEST_RANDOM_NUMBER && isClicked) {
      props.scoreClickZero();
    } else if (randomNumber === LOWEST_RANDOM_NUMBER && isClicked === false) {
      props.scoreSkipZero();
    } else if (randomNumber > LOWEST_RANDOM_NUMBER && isClicked) {
      setWrongClickedColor("red");
      props.scoreClickNonZero();
    } else if (randomNumber > LOWEST_RANDOM_NUMBER && isClicked === false) {
      props.scoreSkipNonZero();
    } else {
      console.log("nothing");
    }
    setIsClicked(false);
  };

  const randomNumberGenerator = () => {
    if (totalGameTime === 0) {
      clearInterval(gameTimerInterval);
      //navigate to gameover
      setIsGameStarted(false);
      setTotalGameTime(TOTAL_GAME_TIME);

      navigation.navigate("GameOver");
    }
    if (totalGameTime < 10) {
      setLastTenSecondsColor("red");
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
      <Text style={[GameStyles.liveScore, { color: wrongClickedColor }]}>
        Live Score: {props.score}
      </Text>

      <TouchableOpacity
        style={GameStyles.randomNumberContainer}
        onPress={() => {
          setIsClicked(true);
        }}
      >
        {isGameStarted ? (
          <View>
            <Text style={GameStyles.randomNumber}>{randomNumber}</Text>
          </View>
        ) : (
          <Text style={GameStyles.requestText}>Please Start the Game !</Text>
        )}
      </TouchableOpacity>
      <View style={GameStyles.timerContainer}>
        <Text style={[GameStyles.timer, { color: lastTenSecondsColor }]}>
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

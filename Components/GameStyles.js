import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT } from "../generalData/generalData";

const percentageHeight = (percentage) => (SCREEN_HEIGHT * percentage) / 100;

const GameStyles = StyleSheet.create({
  container: {
    padding: percentageHeight(2),
  },
  liveScore: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop:percentageHeight(5),
    fontFamily: "sans-serif-medium",
  },
  requestText:{
    fontSize:percentageHeight(3),
    fontWeight:"bold"
  },
  randomNumberContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: percentageHeight(30),
    marginBottom: percentageHeight(5),
    marginTop: percentageHeight(5),
  },
  randomNumber: {
    fontSize: percentageHeight(25),
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
  },
  timerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    fontSize: percentageHeight(5),
    fontWeight: "bold",
  },
  timeFormat: {
    color: "blue",
    fontWeight: "bold",
    fontSize: percentageHeight(5),
    opacity: 0.4,
    fontFamily: "monospace",
  },
  startButton: {
    position:"relative",
    bottom:percentageHeight(1),
    padding: percentageHeight(1),
    textAlign: "center",
    borderWidth: 2,
    borderRadius:percentageHeight(1),
    fontSize: percentageHeight(2.5),
    fontWeight: "bold",
    marginTop: percentageHeight(5),
    backgroundColor: "lightgreen",
  },
  stopButton: {
    padding: percentageHeight(1),
    textAlign: "center",
    borderWidth: 2,
    borderRadius:percentageHeight(1),
    fontSize: percentageHeight(2.5),
    fontWeight: "bold",
    marginTop: percentageHeight(5),
    backgroundColor: "tomato",
  },
  gameOverText: {
    fontSize: percentageHeight(4),
    fontWeight: "bold",
    alignSelf: "center",
    color: "red",
  },
  scoreText: {
    fontSize: percentageHeight(4),
    fontWeight: "bold",
    alignSelf: "center",
    color: "green",
  },
  totalView: {
    borderWidth: 2,
    borderRadius: 10,
    padding: percentageHeight(5),
    marginTop: percentageHeight(10),
  },
  totalText: {
    fontSize: percentageHeight(2.5),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: percentageHeight(1),
  },
});
export default GameStyles;

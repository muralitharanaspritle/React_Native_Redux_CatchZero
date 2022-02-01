import {
  SCORE_FOR_CLICKING_NON_ZERO,
  SCORE_FOR_CLICKING_ZERO,
  SCORE_FOR_SKIPPING_NON_ZERO,
  SCORE_FOR_SKIPPING_ZERO,
} from "../generalData/generalData";
import {
  RESETALL,
  SCORE_CLICK_NON_ZERO,
  SCORE_CLICK_ZERO,
  SCORE_SKIP_NON_ZERO,
  SCORE_SKIP_ZERO,
} from "./ActionType";

const initialState = {
  score: 0,
  totalNumberClicked: 0,
  totalRandomNumbersGenerated: 0,
  totalNumberSkipped: 0,
  totalNumberOfZero: 0,
};

const catchZeroReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCORE_CLICK_ZERO:
      return {
        ...state,
        score: state.score + SCORE_FOR_CLICKING_ZERO,
        totalNumberClicked: state.totalNumberClicked + 1,
        totalRandomNumbersGenerated: state.totalRandomNumbersGenerated + 1,
        totalNumberOfZero: state.totalNumberOfZero + 1,
      };
    case SCORE_CLICK_NON_ZERO:
      return {
        ...state,
        score: state.score + SCORE_FOR_CLICKING_NON_ZERO,
        totalNumberClicked: state.totalNumberClicked + 1,
        totalRandomNumbersGenerated: state.totalRandomNumbersGenerated + 1,
      };
    case SCORE_SKIP_ZERO:
      return {
        ...state,
        score: state.score + SCORE_FOR_SKIPPING_ZERO,
        totalRandomNumbersGenerated: state.totalRandomNumbersGenerated + 1,
        totalNumberSkipped: state.totalNumberSkipped + 1,
        totalNumberOfZero: state.totalNumberOfZero + 1,
      };
    case SCORE_SKIP_NON_ZERO:
      return {
        ...state,
        score: state.score + SCORE_FOR_SKIPPING_NON_ZERO,
        totalRandomNumbersGenerated: state.totalRandomNumbersGenerated + 1,
        totalNumberSkipped: state.totalNumberSkipped + 1,
      };
    case RESETALL:
      return {
        score: 0,
        totalNumberClicked: 0,
        totalRandomNumbersGenerated: 0,
        totalNumberSkipped: 0,
        totalNumberOfZero: 0,
      };
    default:
      return state;
  }
};

export default catchZeroReducer;

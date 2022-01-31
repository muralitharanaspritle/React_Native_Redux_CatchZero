import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const TOTAL_GAME_TIME = 120; //SECS
export const INTERVAL_BETWEEN_RANDOM_NUMBER_GENERATOR = 3; //SECS
export const TIME_GAP_BETWEEN_TWO_RANDOM_NUMBER = 1; //SECS
export const SCORE_FOR_CLICKING_ZERO = 5;
export const SCORE_FOR_CLICKING_NON_ZERO = -2.5;
export const SCORE_FOR_SKIPPING_ZERO = -3;
export const SCORE_FOR_SKIPPING_NON_ZERO = 1;
export const HIGHEST_RANDOM_NUMBER = 5;
export const LOWEST_RANDOM_NUMBER = 0;

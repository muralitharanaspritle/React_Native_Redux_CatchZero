import {
  SCORE_CLICK_NON_ZERO,
  SCORE_CLICK_ZERO,
  SCORE_SKIP_NON_ZERO,
  SCORE_SKIP_ZERO,
} from "./ActionType";

export const scoreClickZero = () => {
  return {
    type: SCORE_CLICK_ZERO,
  };
};

export const scoreClickNonZero = () => {
  return {
    type: SCORE_CLICK_NON_ZERO,
  };
};

export const scoreSkipZero = () => {
  return {
    type: SCORE_SKIP_ZERO,
  };
};

export const scoreSkipNonZero = () => {
  return {
    type: SCORE_SKIP_NON_ZERO,
  };
};

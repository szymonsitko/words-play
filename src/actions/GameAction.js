import { STORE_USER_INPUT, RESET_USER_SCORE } from './types';

export const storeUserInput = (rawInput, cleanedInput) => {
  return {
    type: STORE_USER_INPUT,
    payload: { raw: rawInput, clean: cleanedInput }
  }
}

export const resetUserScoreData = () => {
  return {
    type: RESET_USER_SCORE
  }
}

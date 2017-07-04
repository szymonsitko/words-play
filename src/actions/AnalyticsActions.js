import { STORE_USER_RESULT } from './types';

const INITIAL_STATE = {

};

export const storeGameResult = ({ scoreTarget, timeTotal, timeLeft, userWon }) => {
  console.log(scoreTarget, timeTotal, timeLeft, userWon);
  return {
    type: STORE_USER_RESULT,
    payload: { scoreTarget, timeTotal, timeLeft, userWon }
  }
}

import { STORE_USER_RESULT } from '../actions/types';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_USER_RESULT:
      return {
        ...state,
        scoreTarget: action.payload.scoreTarget,
        timeTotal: action.payload.timeTotal,
        timeLeft: action.payload.timeLeft,
        userWon: action.payload.userWon
      };
    default:
      return state;
  }
};

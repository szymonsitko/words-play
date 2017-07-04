import { STORE_USER_INPUT, RESET_USER_SCORE } from '../actions/types';

const INITIAL_STATE = {
  inputText: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_USER_INPUT:
      return { ...state, inputText: action.payload['raw'], cleanInput: action.payload['clean'] };
    case RESET_USER_SCORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

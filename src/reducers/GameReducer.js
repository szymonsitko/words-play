import { STORE_USER_INPUT } from '../actions/types';

const INITIAL_STATE = {
  inputText: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case STORE_USER_INPUT:
      return { ...state, inputText: action.payload['raw'], cleanInput: action.payload['clean'] };
    default:
      return state;
  }
};

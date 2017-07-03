import { STORE_USER_INPUT } from './types';

export const storeUserInput = input => {
  return {
    type: STORE_USER_INPUT,
    payload: input
  }
}

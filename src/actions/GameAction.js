import { STORE_USER_INPUT } from './types';

export const storeUserInput = (rawInput, cleanedInput) => {
  return {
    type: STORE_USER_INPUT,
    payload: { raw: rawInput, clean: cleanedInput }
  }
}

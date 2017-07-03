export const inputCleaner = input => {
  let inputLowercased = input.toLowerCase();
  let cleanString = '';
  for (let i = 0; i < input.length; i ++) {
    if (inputLowercased[i].match(/[a-z]/i)) {
      cleanString += inputLowercased[i];
    }
  }
  return cleanString;
}

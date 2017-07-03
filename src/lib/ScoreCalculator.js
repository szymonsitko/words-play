export const scoreCalculator = cleanInput => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let score = 0;
  for (let i = 0; i < cleanInput.length; i++) {
    score += alphabet.indexOf(cleanInput[i]) + 1;
  }
  return score;
}

export const timeCalculator = score => {
  return Math.floor(score / 2);
}

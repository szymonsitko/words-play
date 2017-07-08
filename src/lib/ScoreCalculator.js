export const scoreCalculator = cleanInput => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let score = 0;
  for (let i = 0; i < cleanInput.length; i++) {
    score += alphabet.indexOf(cleanInput[i]) + 1;
  }
  return score;
}

export const timeCalculator = input => {
  return (input.length * 2) + 2;
}

export const tagGenerator = (score, givenResult) => {
  const messages = [
    "No comment, maybe try another time...?",
    "Uhm.. Really? Are you serious?",
    "Oh, you're still far away!",
    "Well, this is closer..",
    "Neary there, just need to double check!",
    "Yeah, You nailed it!"
  ];
  let tempNumber = Math.abs(score - givenResult);
  const a = score * .2;
  const b = score * .4;
  const c = score * .6;
  const d = score * .8;
  if (givenResult == score) {
    return messages[5];
  }
  if (tempNumber > 0 && tempNumber < a) {
    return messages[4];
  }
  if (tempNumber >= a && tempNumber < b) {
    return messages[3];
  }
  if (tempNumber >= b && tempNumber < c) {
    return messages[2];
  }
  if (tempNumber >= c && tempNumber < d) {
    return messages[1];
  }
  if (tempNumber >= d) {
    return messages[0];
  }
}

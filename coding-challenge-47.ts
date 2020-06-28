// Solution #1

// Spanish Alphabet
const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'ñ',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function encryptWord(word: string) {
  const wordSplitted = word.split('');

  const letters = wordSplitted.map(letter => {
    const lowerLetter = letter.toLowerCase();
    const index = alphabet.findIndex(letter => letter === lowerLetter);
    const returnLetter = alphabet[alphabet.length - 1 - index];

    if (letter === letter.toUpperCase()) {
      return returnLetter.toUpperCase();
    }
    return returnLetter;
  });

  return letters.join('');
}

console.log(encryptWord('AbC'));

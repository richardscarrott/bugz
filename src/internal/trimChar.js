import { curry, drop, take } from 'ramda';

const firstChar = str => str.charAt(0);

const lastChar = str => str.charAt(str.length - 1);

// NOTE: Maybe safer to avoid recursive calls?
const trimChar = curry((char, val) => {
  if (firstChar(val) === char) {
    return trimChar(char, drop(1, val));
  }
  if (lastChar(val) === char) {
    return trimChar(char, take(val.length - 1, val));
  }
  return val;
});

export default trimChar;

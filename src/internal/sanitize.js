import { compose, drop, prop, match, take, curry } from 'ramda';

const firstChar = str => str.charAt(0);

const lastChar = str => str.charAt(str.length - 1);

const firstCharAsNumber = compose(Number, firstChar);

// NOTE: Maybe safer to avoid recursive calls?
const stripLeadingChars = val =>
  isNaN(firstCharAsNumber(val)) ? stripLeadingChars(drop(1, val)) : val;

const indexOfFirstNonNumeric = compose(prop('index'), match(/[^0-9\.]/));

const stripTrailingChars = val => take(indexOfFirstNonNumeric(val), val);

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

export default compose(trimChar('.'), stripTrailingChars, stripLeadingChars);

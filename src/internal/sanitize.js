import { compose, drop, prop, match, take, ifElse, is, identity } from 'ramda';
import trimChar from './trimChar';

const toString = ifElse(is(String), identity, () => '');

const firstChar = str => str.charAt(0);

const firstCharAsNumber = compose(Number, firstChar);

// NOTE: Maybe safer to avoid recursive calls?
const stripLeadingChars = val =>
  isNaN(firstCharAsNumber(val)) ? stripLeadingChars(drop(1, val)) : val;

const indexOfFirstNonNumeric = compose(prop('index'), match(/[^0-9\.]/));

const stripTrailingChars = val => take(indexOfFirstNonNumeric(val), val);

export default compose(
  trimChar('.'),
  stripTrailingChars,
  stripLeadingChars,
  toString
);

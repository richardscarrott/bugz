import uaParser from 'ua-parser-js';
import {
  memoize,
  ifElse,
  is,
  isEmpty,
  not,
  allPass,
  compose,
  identity
} from 'ramda';

// Ensure arity is 1
const parser = ua => uaParser(ua);

const isValid = allPass([ compose(not, isEmpty), is(String) ]);

export default compose(
  memoize(parser),
  ifElse(isValid, identity, () => 'UNKNOWN')
);

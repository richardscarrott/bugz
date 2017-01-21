import parser from 'ua-parser-js';
import { memoize } from 'ramda';

export default memoize(parser);

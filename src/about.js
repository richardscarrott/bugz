import { compose } from 'ramda';
import parse from './parse';

export default compose('table' in console ? console.table : console.log, parse);

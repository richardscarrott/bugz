import { compose } from 'ramda';
import parse from './parse';
import console from './internal/console';

export default compose('table' in console ? console.table : console.log, parse);

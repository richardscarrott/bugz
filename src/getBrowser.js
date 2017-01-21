import { compose, prop } from 'ramda';
import parse from './parse';

export default compose(prop('browser'), parse);

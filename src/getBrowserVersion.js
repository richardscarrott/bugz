import { compose, prop } from 'ramda';
import getBrowser from './getBrowser';

export default compose(prop('version'), getBrowser);

import { compose, prop } from 'ramda';
import getBrowser from './getBrowser';

export default compose(prop('name'), getBrowser);

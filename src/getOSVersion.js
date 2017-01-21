import { compose, prop } from 'ramda';
import getOS from './getOS';

export default compose(prop('version'), getOS);

import { compose, prop } from 'ramda';
import getEngine from './getEngine';

export default compose(prop('name'), getEngine);

import { useWith, equals, identity } from 'ramda';
import getOSName from './getOSName';

export default useWith(equals, [ identity, getOSName ]);

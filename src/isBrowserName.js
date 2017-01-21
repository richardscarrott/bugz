import { useWith, equals, identity } from 'ramda';
import getBrowserName from './getBrowserName';

export default useWith(equals, [ identity, getBrowserName ]);

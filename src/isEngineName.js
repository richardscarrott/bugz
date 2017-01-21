import { useWith, equals, identity } from 'ramda';
import getEngineName from './getEngineName';

export default useWith(equals, [ identity, getEngineName ]);

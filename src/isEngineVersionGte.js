import { useWith, flip, identity } from 'ramda';
import { gte } from './internal/versionCompare';
import getEngineVersion from './getEngineVersion';

export default useWith(flip(gte), [ identity, getEngineVersion ]);

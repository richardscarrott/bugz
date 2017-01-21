import { useWith, flip, identity } from 'ramda';
import { lte } from './internal/versionCompare';
import getEngineVersion from './getEngineVersion';

export default useWith(flip(lte), [ identity, getEngineVersion ]);

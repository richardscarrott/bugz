import { useWith, flip, identity } from 'ramda';
import { gt } from './internal/versionCompare';
import getEngineVersion from './getEngineVersion';

export default useWith(flip(gt), [ identity, getEngineVersion ]);

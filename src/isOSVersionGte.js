import { useWith, flip, identity } from 'ramda';
import { gte } from './internal/versionCompare';
import getOSVersion from './getOSVersion';

export default useWith(flip(gte), [ identity, getOSVersion ]);

import { useWith, flip, identity } from 'ramda';
import { lte } from './internal/versionCompare';
import getOSVersion from './getOSVersion';

export default useWith(flip(lte), [ identity, getOSVersion ]);

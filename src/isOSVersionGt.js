import { useWith, flip, identity } from 'ramda';
import { gt } from './internal/versionCompare';
import getOSVersion from './getOSVersion';

export default useWith(flip(gt), [ identity, getOSVersion ]);

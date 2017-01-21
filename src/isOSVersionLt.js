import { useWith, flip, identity } from 'ramda';
import { lt } from './internal/versionCompare';
import getOSVersion from './getOSVersion';

export default useWith(flip(lt), [ identity, getOSVersion ]);

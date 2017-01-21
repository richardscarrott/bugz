import { useWith, flip, identity } from 'ramda';
import { lt } from './internal/versionCompare';
import getEngineVersion from './getEngineVersion';

export default useWith(flip(lt), [ identity, getEngineVersion ]);

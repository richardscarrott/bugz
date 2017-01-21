import { useWith, flip, identity } from 'ramda';
import { lt } from './internal/versionCompare';
import getBrowserVersion from './getBrowserVersion';

export default useWith(flip(lt), [ identity, getBrowserVersion ]);

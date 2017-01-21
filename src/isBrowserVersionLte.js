import { useWith, flip, identity } from 'ramda';
import { lte } from './internal/versionCompare';
import getBrowserVersion from './getBrowserVersion';

export default useWith(flip(lte), [ identity, getBrowserVersion ]);

import { useWith, flip, identity } from 'ramda';
import { gte } from './internal/versionCompare';
import getBrowserVersion from './getBrowserVersion';

export default useWith(flip(gte), [ identity, getBrowserVersion ]);

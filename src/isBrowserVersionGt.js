import { useWith, flip, identity } from 'ramda';
import { gt } from './internal/versionCompare';
import getBrowserVersion from './getBrowserVersion';

export default useWith(flip(gt), [ identity, getBrowserVersion ]);

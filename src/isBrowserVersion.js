import { useWith, identity } from 'ramda';
import { equals } from './internal/versionCompare';
import getBrowserVersion from './getBrowserVersion';

export default useWith(equals, [ identity, getBrowserVersion ]);

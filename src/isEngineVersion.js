import { useWith, identity } from 'ramda';
import { equals } from './internal/versionCompare';
import getEngineVersion from './getEngineVersion';

export default useWith(equals, [ identity, getEngineVersion ]);

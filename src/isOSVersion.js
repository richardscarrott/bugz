import { useWith, identity } from 'ramda';
import { equals } from './internal/versionCompare';
import getOSVersion from './getOSVersion';

export default useWith(equals, [ identity, getOSVersion ]);

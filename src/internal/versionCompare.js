import {
  __,
  compose,
  memoize,
  curry,
  length,
  max,
  split,
  equals as ramdaEquals,
  lte as ramdaLte,
  lt as ramdaLt,
  gte as ramdaGte,
  gt as ramdaGt
} from 'ramda';
import sanitize from './sanitize';

const getParts = compose(split('.'), sanitize);

const compare = memoize((a, b) => {
  const aParts = getParts(a);
  const bParts = getParts(b);
  const len = max(length(aParts), length(bParts));
  let idx = 0;
  while (idx < len) {
    const aPart = parseInt(aParts[idx], 10) || 0;
    const bPart = parseInt(bParts[idx], 10) || 0;
    if (aPart === bPart) {
      idx += 1;
    } else if (aPart > bPart) {
      return 1;
    } else {
      return -1;
    }
  }
  return 0;
});

export const equals = curry(compose(ramdaEquals(__, 0), compare));
export const lte = curry(compose(ramdaLte(__, 0), compare));
export const lt = curry(compose(ramdaLt(__, 0), compare));
export const gte = curry(compose(ramdaGte(__, 0), compare));
export const gt = curry(compose(ramdaGt(__, 0), compare));

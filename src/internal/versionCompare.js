import {
  __,
  compose,
  memoize,
  curry,
  length,
  map,
  split,
  equals as ramdaEquals,
  lte as ramdaLte,
  lt as ramdaLt,
  gte as ramdaGte,
  gt as ramdaGt,
  zipWith,
  apply,
  concat,
  reduce,
  pipe
} from 'ramda';
import sanitize from './sanitize';

const padWithZeros = (n, arr) =>
  concat( arr, Array.from(Array(n)).map( () => 0 ) )

const padShortArray = ([arr1, arr2]) =>
  (
    (len1, len2) =>
      len1 === len2
        ? [arr1, arr2]
        : len1 > len2
            ? [ arr1, padWithZeros(len1 - len2, arr2) ]
            : [ padWithZeros(len2 - len1, arr1), arr2 ]
  )(
    length(arr1), length(arr2)
  );

const getParts = pipe(
  sanitize,
  split('.'),
  map(n => parseInt(n, 10) || 0)
);

const compare = memoize((a, b) =>
  pipe(
    map(getParts),
    padShortArray,
    apply(
      zipWith(
        (a, b) =>
          a === b
            ? 0
            : a > b
                ? 1
                : -1
      )
    ),
    reduce(
      (result, comparison) =>
        result === 0
          ? comparison
          : result,
      0
    )
  )([a, b])
);

export const equals = curry(compose(ramdaEquals(__, 0), compare));
export const lte = curry(compose(ramdaLte(__, 0), compare));
export const lt = curry(compose(ramdaLt(__, 0), compare));
export const gte = curry(compose(ramdaGte(__, 0), compare));
export const gt = curry(compose(ramdaGt(__, 0), compare));

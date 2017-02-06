# Bugz [![Build Status](https://travis-ci.org/richardscarrott/bugz.svg?branch=master)](https://travis-ci.org/richardscarrott/bugz) [![npm version](https://badge.fury.io/js/bugz.svg)](https://badge.fury.io/js/bugz) [![Coverage Status](https://coveralls.io/repos/github/richardscarrott/bugz/badge.svg?branch=master)](https://coveralls.io/github/richardscarrott/bugz?branch=master)

Composable user agent detection using [`Ramda`](http://ramdajs.com/), powered by [`ua-parser-js`](https://github.com/faisalman/ua-parser-js).

## Install

```
npm install ramda
npm install bugz
```

## API

```js
import {
    about,
    getBrowser,
    getBrowserName,
    getBrowserVersion,
    getEngine,
    getEngineName,
    getEngineVersion,
    getOS,
    getOSName,
    getOSVersion,
    isAndroidBrowser,
    isBrowserName,
    isBrowserVersion,
    isBrowserVersionGt,
    isBrowserVersionGte,
    isBrowserVersionLt,
    isBrowserVersionLte,
    isChrome,
    isEdge,
    isEdgeHTML,
    isEngineName,
    isEngineVersion,
    isEngineVersionGt,
    isEngineVersionGte,
    isEngineVersionLt,
    isEngineVersionLte,
    isFirefox,
    isGecko,
    isIE,
    isIEMobile,
    isMobileSafari,
    isOSName,
    isOSVersion,
    isOSVersionGt,
    isOSVersionGte,
    isOSVersionLt,
    isOSVersionLte,
    isOpera,
    isOperaMobile,
    isPresto,
    isSafari,
    isTrident,
    isWebKit,
    parse
} from 'bugz';
```

### Usage

```js
import { allPass } from 'ramda';
import {
    isOSName,
    isOSVersionGte,
    isOSVersionLt,
    isBrowserName
} from 'bugz';

const isIOS7 = allPass([
    isOSName('iOS'),
    isOSVersionGte('7'),
    isOSVersionLt('8')
]);

const isIOS7Safari = allPass([
    isIOS7,
    isBrowserName('Mobile Safari')
]);

const isIOS7Chrome = allPass([
    isIOS7,
    isBrowserName('Chrome')
]);

isIOS7Safari(
	'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
); // => true

isIOS7Chrome(
    'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
); // => false

isIOS7Safari(
    'Mozilla/5.0 (iPhone; U; CPU iPhone OS 7_1_1 like Mac OS X; en-gb) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3'
); // => false

isIOS7Chrome(
    'Mozilla/5.0 (iPhone; U; CPU iPhone OS 7_1_1 like Mac OS X; en-gb) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3'
); // => true
```

## Licence
MIT

## TODO
- [x] Move Ramda to peer dep.
- [x] Throw if `UA` is not passed in to `parse` as `ua-parser-js` fallsback to `window.navigator.userAgent` in a browser env.
- [x] Add helper functions for popular browsers.
- [ ] Add helper functions for popular engines
- [ ] Add helper functions for popular operating systems.
- [ ] Document umd, cjs and esmodule builds.
- [ ] Document API.
- [ ] Provide more examples.
- [ ] Add integration tests to test composability.
- [x] Hook up to Travis and Coveralls.
- [x] Publish.

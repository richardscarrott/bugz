# Bugz [![npm version](https://badge.fury.io/js/bugz.svg)](https://badge.fury.io/js/bugz) [![Build Status](https://travis-ci.org/richardscarrott/bugz.svg?branch=master)](https://travis-ci.org/richardscarrott/bugz) [![Coverage Status](https://coveralls.io/repos/github/richardscarrott/bugz/badge.svg?branch=master)](https://coveralls.io/github/richardscarrott/bugz?branch=master)

Composable user agent detection using [`Ramda`](http://ramdajs.com/), powered by [`ua-parser-js`](https://github.com/faisalman/ua-parser-js).

## Why?

Because browsers have <s>bugs</s> bugz.

> [MDN offers some good advice about when and *when not* to use user agent detection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent).

## Yeah, but why another UA library?

Bugz isn't really another library, it's just a lightweight* functional wrapper around [`ua-parser-js`](https://github.com/faisalman/ua-parser-js).

> \* for those already using Ramda.

## Install

```
$ npm install ramda
$ npm install bugz
```

> Ramda is defined as a peer dependency meaning it needs to be defined in your own package.json.

## Usage

https://repl.it/Nlm0/1

```js
import { isOSName } from 'bugz';

const isWindows = isOSName('Windows');

if (isWindows(window.navigator.userAgent)) {
    console.log('OS is Windows');
}
```

```js
import { isOSName, isBrowserName } from 'bugz';
import { allPass } from 'ramda';

const isWindows = isOSName('Windows');
const isFirefox = isBrowserName('Firefox');
const isWindowsFirefox = allPass([
    isWindows,
    isFirefox
]);

if (isWindowsFirefox(window.navigator.userAgent)) {
    console.log('OS is Windows and Browser is Firefox');
}
```

```js
import { isOSName, isBrowserName, isBrowserVersionLt } from 'bugz';
import { allPass } from 'ramda';

const isWindows = isOSName('Windows');
const isFirefox = isBrowserName('Firefox');
const isBrowserVersionLt3_7 = isBrowserVersionLt('3.7');
const isWindowsFirefoxLt3_7 = allPass([
    isWindows,
    isFirefox,
    isBrowserVersionLt3_7
]);

if (isWindowsFirefoxLt3_7(window.navigator.userAgent)) {
    console.log('OS is Windows and Browser is Firefox < 3.7');
}
```

## Examples

Further examples can be found [here](src/__tests__/composition.js).

## API

> All functions are curried by default.

**about** `(ua: string) → void`  
Logs all information obtained from the user agent string to the console.

**getBrowser** `(ua: string) → { name: string, version: string, majorVersion: number }`  
Returns the browser from the user agent string.

**getBrowserName** `(ua: string) → string`  
Returns the browser name from the user agent string.

**getBrowserVersion** `(ua: string) → string`  
Returns the browser version from the user agent string.

**getEngine** `(ua: string) → { name: string, version: string }`  
Returns the engine from the user agent string.

**getEngineName** `(ua: string) → string`  
Returns the engine name from the user agent string.

**getEngineVersion** `(ua: string) → string`  
Returns the engine version from the user agent string.

**getOS** `(ua: string) → { name: string, version: string }`  
Returns the OS from the user agent string.

**getOSName** `(ua: string) → string`  
Returns the OS name from the user agent string.

**getOSVersion** `(ua: string) → string`  
Returns the OS version from the user agent string.

**isAndroid** `(ua: string) → boolean`  
Returns whether or not the operating system is Android.

**isAndroidBrowser** `(ua: string) → boolean`  
Returns whether or not the browser is Android Browser.

**isBrowserName** `(name: string) → (ua: string) → boolean`  
Returns whether or not the browser name is `name`.

**isBrowserVersion** `(version: string) → (ua: string) → boolean`  
Returns whether or not the browser version is `version`.

**isBrowserVersionGt** `(version: string) → (ua: string) → boolean`  
Returns whether or not the browser version is greater than `version`.

**isBrowserVersionGte** `(version: string) → (ua: string) → boolean`  
Returns whether or not the browser version is greater than or equal to `version`.

**isBrowserVersionLt** `(version: string) → (ua: string) → boolean`  
Returns whether or not the browser version is less than `version`.

**isBrowserVersionLte** `(version: string) → (ua: string) → boolean`  
Returns whether or not the browser version is less than or equal to `version`.

**isChrome** `(ua: string) → boolean`  
Returns whether or not the browser is Chrome.

**isEdge** `(ua: string) → boolean`  
Returns whether or not the browser is Edge.

**isEdgeHTML** `(ua: string) → boolean`  
Returns whether or not the engine is EdgeHTML.

**isEngineName** `(name: string) → (ua: string) → boolean`  
Returns whether or not the engine name is `name`.

**isEngineVersion** `(version: string) → (ua: string) → boolean`  
Returns whether or not the engine version is `version`.

**isEngineVersionGt** `(version: string) → (ua: string) → boolean`  
Returns whether or not the engine version is greater than `version`.

**isEngineVersionGte** `(version: string) → (ua: string) → boolean`  
Returns whether or not the engine version is greater than or equal to `version`.

**isEngineVersionLt** `(version: string) → (ua: string) → boolean`  
Returns whether or not the engine version is less than `version`.

**isEngineVersionLte** `(version: string) → (ua: string) → boolean`  
Returns whether or not the engine version is less than or equal to `version`.

**isFirefox** `(ua: string) → boolean`  
Returns whether or not the browser is Firefox.

**isGecko** `(ua: string) → boolean`  
Returns whether or not the engine is Gecko.

**isIE** `(ua: string) → boolean`  
Returns whether or not the browser is Internet Explorer.

**isIEMobile** `(ua: string) → boolean`  
Returns whether or not the browser is Internet Explorer Mobile.

**isIOS** `(ua: string) → boolean`  
Returns whether or not the operating system is iOS.

**isMacOS** `(ua: string) → boolean`  
Returns whether or not the operating system is Mac OS.

**isMobileSafari** `(ua: string) → boolean`  
Returns whether or not the browser is Mobile Safari.

**isOSName** `(name: string) → (ua: string) → boolean`  
Returns whether or not the OS name is `name`.

**isOSVersion** `(version: string) → (ua: string) → boolean`  
Returns whether or not the OS version is `version`.

**isOSVersionGt** `(version: string) → (ua: string) → boolean`  
Returns whether or not the OS version is greater than `version`.

**isOSVersionGte** `(version: string) → (ua: string) → boolean`  
Returns whether or not the OS version is greater than or equal to `version`.

**isOSVersionLt** `(version: string) → (ua: string) → boolean`  
Returns whether or not the OS version is less than `version`.

**isOSVersionLte** `(version: string) → (ua: string) → boolean`  
Returns whether or not the OS version is less than or equal to `version`.

**isOpera** `(ua: string) → boolean`  
Returns whether or not the browser is Opera.

**isOperaMobile** `(ua: string) → boolean`  
Returns whether or not the browser is Opera Mobile.

**isPresto** `(ua: string) → boolean`  
Returns whether or not the engine is Presto.

**isSafari** `(ua: string) → boolean`  
Returns whether or not the browser is Safari (desktop).

**isTrident** `(ua: string) → boolean`  
Returns whether or not the engine is Trident.

**isWebKit** `(ua: string) → boolean`  
Returns whether or not the engine is WebKit.

**isWindows** `(ua: string) → boolean`  
Returns whether or not the operating system is Windows.

**isWindowsPhone** `(ua: string) → boolean`  
Returns whether or not the operating system is Windows Phone.

**parse** `(ua: string) → { ua: string, browser: { name: string, version: string, majorVersion: string }, engine: { name: string, version: string }, os: { name: string, version: string }`  
Returns all information obtained from the user agent string.

## Module Formats

### ES2015

```js
import { isBrowserName } from 'bugz';
```

> Unfortuantely tree shaking isn't particularly effective on Bugz because most exports are pure curried functions which [aren't currently susceptible to dead code elimination](https://github.com/rollup/rollup/issues/1263). Therefore, a modular CommonJS build is additionally offered.

### CommonJS

```js
const bugz = require('bugz');
```

```js
// Or modular for optimized builds
const isBrowserName = require('bugz/isBrowserName');
const isBrowserVersion = require('bugz/isBrowserVersion');
```

### UMD

```html
<script src="bugz.umd.js"></script>
<script>
    const isBrowserName = Bugz.isBrowserName;
</script>
```

```js
require(['bugz'], bugz => {});
```

## License
MIT

## Thank you

[![BrowserStack](browserstack.png)](https://www.browserstack.com/ "BrowserStack")

[BrowserStack](https://www.browserstack.com/ "BrowserStack") for providing a free subscription to support cross browser testing.

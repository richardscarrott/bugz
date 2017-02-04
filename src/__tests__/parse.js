jest.mock('ua-parser-js');

import uaParser from 'ua-parser-js';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
} from '../../test/fixtures/userAgentStrings';
import parse from '../parse';

describe('parse', () => {
  it('uses `ua-parser-js`', () => {
    const ua = MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11;
    const result = {};
    uaParser.mockReturnValue(result);
    expect(parse(ua)).toBe(result);
    expect(uaParser).toHaveBeenCalledWith(ua);
    expect(uaParser).toHaveBeenCalledTimes(1);
  });

  it('is memoized', () => {
    const ua1 = MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11;
    const ua2 = IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE;
    parse(ua1);
    expect(uaParser).toHaveBeenCalledTimes(1);
    parse(ua1);
    expect(uaParser).toHaveBeenCalledTimes(1);
    parse(ua2);
    expect(uaParser).toHaveBeenCalledTimes(2);
    parse(ua2);
    expect(uaParser).toHaveBeenCalledTimes(2);
    parse(ua1);
    expect(uaParser).toHaveBeenCalledTimes(2);
  });

  it("passes through 'UNKNOWN' if `ua` is not a string", () => {
    uaParser.mockImplementation(ua => ({ ua, foo: 'bar' }));
    const expected = { ua: 'UNKNOWN', foo: 'bar' };
    expect(parse(void 0)).toEqual(expected);
    expect(parse(null)).toEqual(expected);
    expect(parse(false)).toEqual(expected);
    expect(parse(true)).toEqual(expected);
    expect(parse(0)).toEqual(expected);
    expect(parse(12)).toEqual(expected);
    expect(parse(/erm/)).toEqual(expected);
    expect(parse([])).toEqual(expected);
    expect(parse([ 0, 1, 2 ])).toEqual(expected);
    expect(parse({})).toEqual(expected);
    expect(parse({ foo: 'bar' })).toEqual(expected);
    expect(parse(Object.create(null))).toEqual(expected);
    expect(parse(new Date())).toEqual(expected);
  });

  it("passes through 'UNKNOWN' if `ua` is an empty string", () => {
    uaParser.mockImplementation(ua => ({ ua, foo: 'bar' }));
    expect(parse('')).toEqual({ ua: 'UNKNOWN', foo: 'bar' });
  });
});

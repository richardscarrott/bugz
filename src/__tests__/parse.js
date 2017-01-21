jest.mock('ua-parser-js');

import parser from 'ua-parser-js';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
} from '../../test/fixtures/userAgentStrings';
import parse from '../parse';

describe('parse', () => {
  it('uses `ua-parser-js`', () => {
    const ua = MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11;
    const result = {};
    parser.mockReturnValue(result);
    expect(parse(ua)).toEqual(result);
    expect(parser).toHaveBeenCalledWith(ua);
    expect(parser).toHaveBeenCalledTimes(1);
  });

  it('is memoized', () => {
    const ua1 = MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11;
    const ua2 = IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE;
    parse(ua1);
    expect(parser).toHaveBeenCalledTimes(1);
    parse(ua1);
    expect(parser).toHaveBeenCalledTimes(1);
    parse(ua2);
    expect(parser).toHaveBeenCalledTimes(2);
    parse(ua2);
    expect(parser).toHaveBeenCalledTimes(2);
    parse(ua1);
    expect(parser).toHaveBeenCalledTimes(2);
  });
});

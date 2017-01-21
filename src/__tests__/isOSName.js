import isOSName from '../isOSName';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isOSName', () => {
  it('returns true if the OS matches', () => {
    expect(
      isOSName('Mac OS', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isOSName(
        'iOS',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(true);
  });

  it('returns false if the OS does not match', () => {
    expect(
      isOSName('Windows', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
    expect(
      isOSName(
        'Android',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
  });

  it('is curried', () => {
    const isMacOS = isOSName('Mac OS');
    const isWindows = isOSName('Windows');
    expect(isMacOS(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)).toBe(true);
    expect(
      isWindows(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
  });
});

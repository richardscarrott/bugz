import isOSVersionLt from '../isOSVersionLt';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE,
  WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0
} from '../../test/fixtures/userAgentStrings';

describe('isOSVersionLt', () => {
  it('returns false if the OS version is equal', () => {
    expect(
      isOSVersionLt('10.7.3', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
    expect(
      isOSVersionLt(
        '2.1',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
    expect(isOSVersionLt('7', WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)).toBe(false);
  });

  it('returns true if the OS version is less', () => {
    expect(
      isOSVersionLt('10.8', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isOSVersionLt(
        '3.9.0',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(true);
    expect(isOSVersionLt('8', WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)).toBe(true);
  });

  it('returns false if the OS version is greater', () => {
    expect(
      isOSVersionLt('10.6', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
    expect(
      isOSVersionLt(
        '1',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
    expect(
      isOSVersionLt('6.55', WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)
    ).toBe(false);
  });

  it('is curried', () => {
    const isLt11_2 = isOSVersionLt('11.2');
    const isLt7 = isOSVersionLt('7');
    expect(
      isLt11_2(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(isLt7(WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)).toBe(false);
  });
});

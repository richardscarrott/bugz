import isOSVersionGte from '../isOSVersionGte';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE,
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isOSVersionGte', () => {
  it('returns true if the OS version is equal', () => {
    expect(
      isOSVersionGte('10.7.3', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isOSVersionGte(
        '2.1',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(true);
    expect(
      isOSVersionGte(
        '2.3.5.0',
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(true);
  });

  it('returns false if the OS version is less', () => {
    expect(
      isOSVersionGte('14.1', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
    expect(
      isOSVersionGte(
        '4.1',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
    expect(
      isOSVersionGte(
        '2.3.5.0.1',
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(false);
  });

  it('returns true if the OS version is greater', () => {
    expect(
      isOSVersionGte('7', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isOSVersionGte(
        '2.0.0',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(true);
    expect(
      isOSVersionGte(
        '2.3.1',
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(true);
  });

  it('is curried', () => {
    const isGte10_7_3_0 = isOSVersionGte('10.7.3.0');
    const isGte8_0 = isOSVersionGte('8.0');
    expect(
      isGte10_7_3_0(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isGte8_0(ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE)
    ).toBe(false);
  });
});

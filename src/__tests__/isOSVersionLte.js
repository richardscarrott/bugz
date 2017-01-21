import isOSVersionLte from '../isOSVersionLte';
import {
  WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE,
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isOSVersionLte', () => {
  it('returns true if the OS version is equal', () => {
    expect(isOSVersionLte('7', WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)).toBe(true);
    expect(
      isOSVersionLte(
        '2.1',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(true);
    expect(
      isOSVersionLte(
        '2.3.5.0',
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(true);
  });

  it('returns true if the OS version is less', () => {
    expect(
      isOSVersionLte('7.1', WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)
    ).toBe(true);
    expect(
      isOSVersionLte(
        '4.5',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(true);
    expect(
      isOSVersionLte(
        '2.3.5.9',
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(true);
  });

  it('returns false if the OS version is greater', () => {
    expect(
      isOSVersionLte('6.9', WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)
    ).toBe(false);
    expect(
      isOSVersionLte(
        '1.1',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
    expect(
      isOSVersionLte(
        '2.3.3.0',
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(false);
  });

  it('is curried', () => {
    const isLte10_6 = isOSVersionLte('10.6');
    const isLte2_0 = isOSVersionLte('2.0');
    expect(isLte10_6(WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)).toBe(true);
    expect(
      isLte2_0(IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE)
    ).toBe(false);
  });
});

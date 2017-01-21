import isDesktopSafari from '../isDesktopSafari';
import {
  MAC_OS_10_6_6_SAFARI_5_0_4_WEBKIT_533_20_25,
  WINDOWS_XP_SAFARI_3_0_WEBKIT_522_11_3,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE,
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isDesktopSafari', () => {
  it('returns true if the browser is Desktop Safari', () => {
    expect(
      isDesktopSafari(MAC_OS_10_6_6_SAFARI_5_0_4_WEBKIT_533_20_25)
    ).toBe(true);
    expect(isDesktopSafari(WINDOWS_XP_SAFARI_3_0_WEBKIT_522_11_3)).toBe(true);
  });

  it('returns false if the browser is not Desktop Safari', () => {
    expect(
      isDesktopSafari(
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
    expect(
      isDesktopSafari(
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(false);
  });
});

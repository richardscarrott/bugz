import isSafari from '../isSafari';
import {
  MAC_OS_10_6_6_SAFARI_5_0_4_WEBKIT_533_20_25,
  WINDOWS_XP_SAFARI_3_0_WEBKIT_522_11_3,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE,
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isSafari', () => {
  it('returns true if the browser is Safari', () => {
    expect(isSafari(MAC_OS_10_6_6_SAFARI_5_0_4_WEBKIT_533_20_25)).toBe(true);
    expect(isSafari(WINDOWS_XP_SAFARI_3_0_WEBKIT_522_11_3)).toBe(true);
  });

  it('returns false if the browser is not Safari', () => {
    expect(
      isSafari(IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE)
    ).toBe(false);
    expect(
      isSafari(ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE)
    ).toBe(false);
  });
});

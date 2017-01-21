import isMobileSafari from '../isMobileSafari';
import {
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE,
  IOS_4_3_MOBILE_SAFARI_5_0_2_WEBKIT_533_17_9_APPLE_IPAD_TABLET,
  MAC_OS_10_6_6_SAFARI_5_0_4_WEBKIT_533_20_25,
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isMobileSafari', () => {
  it('returns true if the browser version is Mobile Safari', () => {
    expect(
      isMobileSafari(
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(true);
    expect(
      isMobileSafari(
        IOS_4_3_MOBILE_SAFARI_5_0_2_WEBKIT_533_17_9_APPLE_IPAD_TABLET
      )
    ).toBe(true);
  });

  it('returns false if the browser version is not Mobile Safari', () => {
    expect(
      isMobileSafari(MAC_OS_10_6_6_SAFARI_5_0_4_WEBKIT_533_20_25)
    ).toBe(false);
    expect(
      isMobileSafari(
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(false);
  });
});

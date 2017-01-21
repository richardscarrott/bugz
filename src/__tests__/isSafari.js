import isSafari from '../isSafari';
import {
  MAC_OS_10_6_6_SAFARI_5_0_4_WEBKIT_533_20_25,
  IOS_4_3_MOBILE_SAFARI_5_0_2_WEBKIT_533_17_9_APPLE_IPAD_TABLET,
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isSafari', () => {
  it('returns true if the browser version is Safari', () => {
    expect(isSafari(MAC_OS_10_6_6_SAFARI_5_0_4_WEBKIT_533_20_25)).toBe(true);
    expect(
      isSafari(IOS_4_3_MOBILE_SAFARI_5_0_2_WEBKIT_533_17_9_APPLE_IPAD_TABLET)
    ).toBe(true);
  });

  it('returns false if the browser version is not Safari', () => {
    expect(
      isSafari(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
    expect(
      isSafari(ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE)
    ).toBe(false);
  });
});

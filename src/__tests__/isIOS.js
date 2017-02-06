import isIOS from '../isIOS';
import {
  IOS_5_1_MOBILE_SAFARI_5_1_WEBKIT_534_46_APPLE_IPHONE_MOBILE,
  IOS_4_3_MOBILE_SAFARI_5_0_2_WEBKIT_533_17_9_APPLE_IPAD_TABLET,
  ANDROID_4_0_3_CHROME_16_0_912_75_WEBKIT_535_7_SAMSUNG_GALAXY_NEXUS_MOBILE,
  MAC_OS_10_7_3_CHROME_20_0_0_0_WEBKIT_536_11
} from '../../test/fixtures/userAgentStrings';

describe('isIOS', () => {
  it('returns true if the engine is iOS', () => {
    expect(
      isIOS(IOS_5_1_MOBILE_SAFARI_5_1_WEBKIT_534_46_APPLE_IPHONE_MOBILE)
    ).toBe(true);
    expect(
      isIOS(IOS_4_3_MOBILE_SAFARI_5_0_2_WEBKIT_533_17_9_APPLE_IPAD_TABLET)
    ).toBe(true);
  });

  it('returns false if the engine is not iOS', () => {
    expect(
      isIOS(
        ANDROID_4_0_3_CHROME_16_0_912_75_WEBKIT_535_7_SAMSUNG_GALAXY_NEXUS_MOBILE
      )
    ).toBe(false);
    expect(isIOS(MAC_OS_10_7_3_CHROME_20_0_0_0_WEBKIT_536_11)).toBe(false);
  });
});

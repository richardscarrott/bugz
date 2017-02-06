import isAndroid from '../isAndroid';
import {
  ANDROID_4_0_3_CHROME_16_0_912_75_WEBKIT_535_7_SAMSUNG_GALAXY_NEXUS_MOBILE,
  ANDROID_3_2_1_ANDROID_BROWSER_4_0_WEBKIT_534_13,
  IOS_5_1_MOBILE_SAFARI_5_1_WEBKIT_534_46_APPLE_IPHONE_MOBILE,
  MAC_OS_10_7_3_CHROME_20_0_0_0_WEBKIT_536_11
} from '../../test/fixtures/userAgentStrings';

describe('isAndroid', () => {
  it('returns true if the engine is Android', () => {
    expect(
      isAndroid(
        ANDROID_4_0_3_CHROME_16_0_912_75_WEBKIT_535_7_SAMSUNG_GALAXY_NEXUS_MOBILE
      )
    ).toBe(true);
    expect(
      isAndroid(ANDROID_3_2_1_ANDROID_BROWSER_4_0_WEBKIT_534_13)
    ).toBe(true);
  });

  it('returns false if the engine is not Android', () => {
    expect(
      isAndroid(IOS_5_1_MOBILE_SAFARI_5_1_WEBKIT_534_46_APPLE_IPHONE_MOBILE)
    ).toBe(false);
    expect(isAndroid(MAC_OS_10_7_3_CHROME_20_0_0_0_WEBKIT_536_11)).toBe(false);
  });
});

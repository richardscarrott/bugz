import isWindowsPhone from '../isWindowsPhone';
import {
  WINDOWS_PHONE_10_0_EDGE_13_10586_EDGEHTML_13_10586_MICROSOFT_LUMIA_950,
  WINDOWS_PHONE_8_0_IEMOBILE_10_0_TRIDENT_6_0_NOKIA_LUMIA_810,
  ANDROID_4_0_3_CHROME_16_0_912_75_WEBKIT_535_7_SAMSUNG_GALAXY_NEXUS_MOBILE,
  IOS_5_1_MOBILE_SAFARI_5_1_WEBKIT_534_46_APPLE_IPHONE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isWindowsPhone', () => {
  it('returns true if the engine is Windows Phone', () => {
    expect(
      isWindowsPhone(
        WINDOWS_PHONE_10_0_EDGE_13_10586_EDGEHTML_13_10586_MICROSOFT_LUMIA_950
      )
    ).toBe(true);
    expect(
      isWindowsPhone(
        WINDOWS_PHONE_8_0_IEMOBILE_10_0_TRIDENT_6_0_NOKIA_LUMIA_810
      )
    ).toBe(true);
  });

  it('returns false if the engine is not Windows Phone', () => {
    expect(
      isWindowsPhone(
        ANDROID_4_0_3_CHROME_16_0_912_75_WEBKIT_535_7_SAMSUNG_GALAXY_NEXUS_MOBILE
      )
    ).toBe(false);
    expect(
      isWindowsPhone(
        IOS_5_1_MOBILE_SAFARI_5_1_WEBKIT_534_46_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
  });
});

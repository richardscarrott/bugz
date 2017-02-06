import isTrident from '../isTrident';
import {
  WINDOWS_7_IE_10_0_TRIDENT_6_0,
  WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE,
  WINDOWS_8_FIREFOX_20_0_GECKO_20_0,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isTrident', () => {
  it('returns true if the engine is Trident', () => {
    expect(isTrident(WINDOWS_7_IE_10_0_TRIDENT_6_0)).toBe(true);
    expect(
      isTrident(WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE)
    ).toBe(true);
  });

  it('returns false if the engine is not Trident', () => {
    expect(isTrident(WINDOWS_8_FIREFOX_20_0_GECKO_20_0)).toBe(false);
    expect(
      isTrident(IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE)
    ).toBe(false);
  });
});

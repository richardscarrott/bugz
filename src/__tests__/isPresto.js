import isPresto from '../isPresto';
import {
  ANDROID_2_3_5_OPERA_MOBI_11_50_PRESTO_2_9_201,
  OPERA_MINI_5_1_21214_PRESTO_2_5_25,
  WINDOWS_8_FIREFOX_20_0_GECKO_20_0,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isPresto', () => {
  it('returns true if the engine is Presto', () => {
    expect(isPresto(ANDROID_2_3_5_OPERA_MOBI_11_50_PRESTO_2_9_201)).toBe(true);
    expect(isPresto(OPERA_MINI_5_1_21214_PRESTO_2_5_25)).toBe(true);
  });

  it('returns false if the engine is not Presto', () => {
    expect(isPresto(WINDOWS_8_FIREFOX_20_0_GECKO_20_0)).toBe(false);
    expect(
      isPresto(IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE)
    ).toBe(false);
  });
});

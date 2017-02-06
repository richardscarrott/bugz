import isWebKit from '../isWebKit';
import {
  WINDOWS_8_CHROME_20_0_1090_0_WEBKIT_536_6,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE,
  WINDOWS_7_IE_10_0_TRIDENT_6_0,
  WINDOWS_8_FIREFOX_20_0_GECKO_20_0
} from '../../test/fixtures/userAgentStrings';

describe('isWebKit', () => {
  it('returns true if the engine is WebKit', () => {
    expect(isWebKit(WINDOWS_8_CHROME_20_0_1090_0_WEBKIT_536_6)).toBe(true);
    expect(
      isWebKit(IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE)
    ).toBe(true);
  });

  it('returns false if the engine is not WebKit', () => {
    expect(isWebKit(WINDOWS_7_IE_10_0_TRIDENT_6_0)).toBe(false);
    expect(isWebKit(WINDOWS_8_FIREFOX_20_0_GECKO_20_0)).toBe(false);
  });
});

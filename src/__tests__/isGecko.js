import isGecko from '../isGecko';
import {
  WINDOWS_8_FIREFOX_20_0_GECKO_20_0,
  LINUX_I686_SEAMONKEY_2_0B1PRE_GECKO_1_9_1B4PRE,
  WINDOWS_8_CHROME_20_0_1090_0_WEBKIT_536_6,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isGecko', () => {
  it('returns true if the engine is Gecko', () => {
    expect(isGecko(WINDOWS_8_FIREFOX_20_0_GECKO_20_0)).toBe(true);
    expect(isGecko(LINUX_I686_SEAMONKEY_2_0B1PRE_GECKO_1_9_1B4PRE)).toBe(true);
  });

  it('returns false if the engine is not Gecko', () => {
    expect(isGecko(WINDOWS_8_CHROME_20_0_1090_0_WEBKIT_536_6)).toBe(false);
    expect(
      isGecko(IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE)
    ).toBe(false);
  });
});

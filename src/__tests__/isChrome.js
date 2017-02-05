import isChrome from '../isChrome';
import {
  WINDOWS_8_CHROME_20_0_1090_0_WEBKIT_536_6,
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE,
  WINDOWS_8_FIREFOX_20_0_GECKO_20_0
} from '../../test/fixtures/userAgentStrings';

describe('isChrome', () => {
  it('returns true if the browser is Chrome', () => {
    expect(isChrome(WINDOWS_8_CHROME_20_0_1090_0_WEBKIT_536_6)).toBe(true);
    expect(
      isChrome(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
  });

  it('returns false if the browser is not Chrome', () => {
    expect(
      isChrome(IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE)
    ).toBe(false);
    expect(isChrome(WINDOWS_8_FIREFOX_20_0_GECKO_20_0)).toBe(false);
  });
});

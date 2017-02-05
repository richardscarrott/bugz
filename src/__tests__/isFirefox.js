import isFirefox from '../isFirefox';
import {
  WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0,
  MAC_OS_10_5_FIREFOX_3_0_3_GECKO_1_9_0_3,
  MAC_OS_10_6_6_SAFARI_5_0_4_WEBKIT_533_20_25,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isFirefox', () => {
  it('returns true if the browser is Firefox', () => {
    expect(isFirefox(WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)).toBe(true);
    expect(isFirefox(MAC_OS_10_5_FIREFOX_3_0_3_GECKO_1_9_0_3)).toBe(true);
  });

  it('returns false if the browser is not Firefox', () => {
    expect(
      isFirefox(IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE)
    ).toBe(false);
    expect(isFirefox(MAC_OS_10_6_6_SAFARI_5_0_4_WEBKIT_533_20_25)).toBe(false);
  });
});

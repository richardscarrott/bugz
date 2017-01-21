import getBrowserName from '../getBrowserName';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('getBrowserName', () => {
  it('returns the browser name', () => {
    expect(
      getBrowserName(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe('Chrome');
    expect(
      getBrowserName(
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe('Mobile Safari');
  });
});

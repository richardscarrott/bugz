import getBrowserVersion from '../getBrowserVersion';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('getBrowserVersion', () => {
  it('returns the browser version', () => {
    expect(
      getBrowserVersion(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe('20.0.1132.57');
    expect(
      getBrowserVersion(
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe('3.1.1');
  });
});

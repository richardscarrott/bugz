import isBrowserName from '../isBrowserName';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isBrowserName', () => {
  it('returns true if the browser matches', () => {
    expect(
      isBrowserName('Chrome', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isBrowserName(
        'Mobile Safari',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(true);
  });

  it('returns false if the browser does not match', () => {
    expect(
      isBrowserName('Safari', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
    expect(
      isBrowserName(
        'Chrome',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
  });

  it('is curried', () => {
    const isChrome = isBrowserName('Chrome');
    const isSafari = isBrowserName('Safari');
    expect(
      isChrome(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isSafari(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
  });
});

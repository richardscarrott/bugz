import isBrowserVersion from '../isBrowserVersion';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE,
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isBrowserVersion', () => {
  it('returns true if the browser version matches', () => {
    expect(
      isBrowserVersion(
        '20.0.1132.57',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(true);
    expect(
      isBrowserVersion(
        '4',
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(true);
  });

  it('returns false if the browser version does not match', () => {
    expect(
      isBrowserVersion('4.1', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
    expect(
      isBrowserVersion(
        '99',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
  });

  it('is curried', () => {
    const is20_0_1132_57 = isBrowserVersion('20.0.1132.57');
    const is99 = isBrowserVersion('99');
    expect(
      is20_0_1132_57(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(is99(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)).toBe(false);
  });
});

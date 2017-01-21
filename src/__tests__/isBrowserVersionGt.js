import isBrowserVersionGt from '../isBrowserVersionGt';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE,
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE,
  WINDOWS_VISTA_CHROME_21_0_1180_75_WEBKIT_537_1
} from '../../test/fixtures/userAgentStrings';

describe('isBrowserVersionGt', () => {
  it('returns false if the browser version is equal', () => {
    expect(
      isBrowserVersionGt(
        '20.0.1132.57',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(false);
    expect(
      isBrowserVersionGt(
        '3.1.1',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
    expect(
      isBrowserVersionGt(
        '4',
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(false);
  });

  it('returns false if the browser version is less', () => {
    expect(
      isBrowserVersionGt('53', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
    expect(
      isBrowserVersionGt(
        '4.1.3',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
    expect(
      isBrowserVersionGt(
        '20.0.1132.57.5',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(false);
  });

  it('returns true if the browser version is greater', () => {
    expect(
      isBrowserVersionGt('4.1', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isBrowserVersionGt(
        '20.0.1132.56',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(true);
    expect(
      isBrowserVersionGt(
        '3.0.0.1',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(true);
  });

  it('is curried', () => {
    const isGt20_0_1132 = isBrowserVersionGt('20.0.1132');
    const isGt22 = isBrowserVersionGt('22');
    expect(
      isGt20_0_1132(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(isGt22(WINDOWS_VISTA_CHROME_21_0_1180_75_WEBKIT_537_1)).toBe(false);
  });
});

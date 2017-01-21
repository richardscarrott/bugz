import isBrowserVersionLt from '../isBrowserVersionLt';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE,
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE,
  WINDOWS_VISTA_CHROME_21_0_1180_75_WEBKIT_537_1,
  WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0
} from '../../test/fixtures/userAgentStrings';

describe('isBrowserVersionLt', () => {
  it('returns false if the browser version is equal', () => {
    expect(
      isBrowserVersionLt(
        '20.0.1132.57',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(false);
    expect(
      isBrowserVersionLt(
        '4',
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(false);
    expect(
      isBrowserVersionLt('15.0', WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)
    ).toBe(false);
  });

  it('returns true if the browser version is less', () => {
    expect(
      isBrowserVersionLt('53', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isBrowserVersionLt(
        '4.1.3',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(true);
    expect(
      isBrowserVersionLt('15.5', WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)
    ).toBe(true);
  });

  it('returns false if the browser version is greater', () => {
    expect(
      isBrowserVersionLt('4.1', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
    expect(
      isBrowserVersionLt(
        '20.0.1132.56',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(false);
    expect(
      isBrowserVersionLt(
        '3.0.0.1',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
  });

  it('is curried', () => {
    const isLt20_0_1200 = isBrowserVersionLt('20.0.1200');
    const isLt20 = isBrowserVersionLt('20');
    expect(
      isLt20_0_1200(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(isLt20(WINDOWS_VISTA_CHROME_21_0_1180_75_WEBKIT_537_1)).toBe(false);
  });
});

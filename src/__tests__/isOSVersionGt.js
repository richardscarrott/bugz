import isOSVersionGt from '../isOSVersionGt';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE,
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isOSVersionGt', () => {
  it('returns false if the OS version is equal', () => {
    expect(
      isOSVersionGt('10.7.3', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
    expect(
      isOSVersionGt(
        '2.1.0',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
    expect(
      isOSVersionGt(
        '2.3.5',
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(false);
  });

  it('returns false if the OS version is less', () => {
    expect(
      isOSVersionGt('10.8.3', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
    expect(
      isOSVersionGt(
        '3',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
    expect(
      isOSVersionGt(
        '2.4',
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(false);
  });

  it('returns true if the OS version is greater', () => {
    expect(
      isOSVersionGt('9', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isOSVersionGt(
        '2.0',
        IOS_2_1_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPHONE_MOBILE
      )
    ).toBe(true);
    expect(
      isOSVersionGt(
        '2.3.1.0.9',
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(true);
  });

  it('is curried', () => {
    const isGt10_7_2 = isOSVersionGt('10.7.2');
    const isGt3 = isOSVersionGt('3');
    expect(
      isGt10_7_2(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isGt3(ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE)
    ).toBe(false);
  });
});

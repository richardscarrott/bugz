import { converge, and, or, allPass, anyPass } from 'ramda';
import {
  WINDOWS_8_CHROME_20_0_1090_0_WEBKIT_536_6,
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  MAC_OS_10_7_3_CHROME_20_0_0_0_WEBKIT_536_11,
  WINDOWS_VISTA_CHROME_21_0_1180_75_WEBKIT_537_1,
  LINUX_I686_CHROME_10_0_648_127_WEBKIT_534_16,
  IOS_5_1_1_CHROME_19_0_1084_60_WEBKIT_534_46_0_APPLE_IPHONE_MOBILE,
  ANDROID_4_0_3_CHROME_16_0_912_75_WEBKIT_535_7_SAMSUNG_GALAXY_NEXUS_MOBILE,
  CHROMIUM_OS_9_10_0_CHROME_4_0_253_0_WEBKIT_532_5,
  UBUNTU_11_10_CHROMIUM_16_0_912_21_WEBKIT_535_7,
  ANDROID_4_0_3_ANDROID_BROWSER_4_0_WEBKIT_534_30_SAMSUNG_GT_I9000_MOBILE,
  WINDOWS_8_FIREFOX_20_0_GECKO_20_0,
  IOS_2_0_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPOD_MOBILE
} from '../../test/fixtures/userAgentStrings';
import isBrowserName from '../isBrowserName';
import isBrowserVersionGte from '../isBrowserVersionGte';
import isBrowserVersionLt from '../isBrowserVersionLt';
import getBrowser from '../getBrowser';

// Example compositions.
const isChrome = isBrowserName('Chrome');
const isChrome20 = allPass([
  isChrome,
  isBrowserVersionGte('20'),
  isBrowserVersionLt('21')
]);
const isChrome19 = allPass([
  isChrome,
  isBrowserVersionGte('19'),
  isBrowserVersionLt('20')
]);
const isChrome19Or20 = anyPass([ isChrome19, isChrome20 ]);
const isLteChrome16 = allPass([ isChrome, isBrowserVersionLt('17') ]);

describe('getBrowser', () => {
  // TODO: Test all compositions
  describe('isChrome20', () => {
    it('returns true if browser version is equal to 20', () => {
      expect(isChrome20(WINDOWS_8_CHROME_20_0_1090_0_WEBKIT_536_6)).toBe(true);
      expect(
        isChrome20(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
      ).toBe(true);
      expect(
        isChrome20(MAC_OS_10_7_3_CHROME_20_0_0_0_WEBKIT_536_11)
      ).toBe(true);
    });

    it('returns false if browser version is greater than 20', () => {
      expect(
        isChrome20(WINDOWS_VISTA_CHROME_21_0_1180_75_WEBKIT_537_1)
      ).toBe(false);
      // TODO: Get some UAs for more recent chrome versions.
    });

    it('returns false if browser version is less than 20', () => {
      expect(
        isChrome20(LINUX_I686_CHROME_10_0_648_127_WEBKIT_534_16)
      ).toBe(false);
      expect(
        isChrome20(
          IOS_5_1_1_CHROME_19_0_1084_60_WEBKIT_534_46_0_APPLE_IPHONE_MOBILE
        )
      ).toBe(false);
      expect(
        isChrome20(
          ANDROID_4_0_3_CHROME_16_0_912_75_WEBKIT_535_7_SAMSUNG_GALAXY_NEXUS_MOBILE
        )
      ).toBe(false);
    });

    it('returns false if browser is not Chrome', () => {
      expect(
        isChrome20(
          ANDROID_4_0_3_ANDROID_BROWSER_4_0_WEBKIT_534_30_SAMSUNG_GT_I9000_MOBILE
        )
      ).toBe(false);
      expect(isChrome20(WINDOWS_8_FIREFOX_20_0_GECKO_20_0)).toBe(false);
      expect(
        isChrome20(
          IOS_2_0_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPOD_MOBILE
        )
      ).toBe(false);
    });
  });
});

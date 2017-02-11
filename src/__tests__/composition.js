import { allPass, anyPass, compose, not } from 'ramda';
import {
  WINDOWS_8_CHROME_20_0_1090_0_WEBKIT_536_6,
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  MAC_OS_10_7_3_CHROME_20_0_0_0_WEBKIT_536_11,
  WINDOWS_VISTA_CHROME_21_0_1180_75_WEBKIT_537_1,
  MAC_OS_10_12_1_CHROME_56_0_2924_87_WEBKIT_537_36,
  WINDOWS_8_1_CHROME_33_0_1750_117_WEBKIT_537_36,
  LINUX_I686_CHROME_10_0_648_127_WEBKIT_534_16,
  IOS_5_1_1_CHROME_19_0_1084_60_WEBKIT_534_46_0_APPLE_IPHONE_MOBILE,
  IOS_4_3_MOBILE_SAFARI_5_0_2_WEBKIT_533_17_9_APPLE_IPAD_TABLET,
  IOS_10_0_MOBILE_SAFARI_10_0_WEBKIT_602_1_38_APPLE_IPHONE_MOBILE,
  ANDROID_4_0_3_CHROME_16_0_912_75_WEBKIT_535_7_SAMSUNG_GALAXY_NEXUS_MOBILE,
  ANDROID_4_0_3_ANDROID_BROWSER_4_0_WEBKIT_534_30_SAMSUNG_GT_I9000_MOBILE,
  WINDOWS_8_FIREFOX_20_0_GECKO_20_0,
  IOS_2_0_MOBILE_SAFARI_3_1_1_WEBKIT_525_18_1_APPLE_IPOD_MOBILE,
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE,
  ANDROID_3_2_1_ANDROID_BROWSER_4_0_WEBKIT_534_13,
  ANDROID_4_0_2_ANDROID_BROWSER_4_0_WEBKIT_534_30_SAMSUNG_GALAXY_NEXUS_MOBILE,
  WINDOWS_7_IE_10_0_TRIDENT_6_0,
  WINDOWS_XP_IE_6_0,
  WINDOWS_MOBILE_6_1_IE_4_01_ZTE_E_N72_MOBILE,
  WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0,
  WINDOWS_7_FIREFOX_40_1_GECKO_40_0
} from '../../test/fixtures/userAgentStrings';
import {
  isChrome,
  isFirefox,
  isIE,
  isAndroidBrowser,
  isBrowserVersionGte,
  isBrowserVersionLt,
  isIOS,
  isOSVersionLt,
  isWebKit,
  isEngineVersionLt
} from '../';

describe('getBrowser', () => {
  describe('isChrome20', () => {
    const isChrome20 = allPass([
      isChrome,
      isBrowserVersionGte('20'),
      isBrowserVersionLt('21')
    ]);

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
      expect(
        isChrome20(MAC_OS_10_12_1_CHROME_56_0_2924_87_WEBKIT_537_36)
      ).toBe(false);
      expect(
        isChrome20(WINDOWS_8_1_CHROME_33_0_1750_117_WEBKIT_537_36)
      ).toBe(false);
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

  describe('shouldAnimate', () => {
    const isAndroidBrowserWebkitLt534_14 = allPass([
      isAndroidBrowser,
      isWebKit,
      isEngineVersionLt('534.14')
    ]);

    const isIOSLt8 = allPass([ isIOS, isOSVersionLt('8') ]);

    const shouldAnimate = allPass([
      compose(not, isAndroidBrowserWebkitLt534_14),
      compose(not, isIOSLt8)
    ]);

    it(
      'returns false if is Android Browser with WebKit less than 534.14',
      () => {
        expect(
          shouldAnimate(
            ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
          )
        ).toBe(false);
        expect(
          shouldAnimate(ANDROID_3_2_1_ANDROID_BROWSER_4_0_WEBKIT_534_13)
        ).toBe(false);
      }
    );

    it('returns false if is iOS less than 8', () => {
      expect(
        shouldAnimate(
          IOS_5_1_1_CHROME_19_0_1084_60_WEBKIT_534_46_0_APPLE_IPHONE_MOBILE
        )
      ).toBe(false);
      expect(
        shouldAnimate(
          IOS_4_3_MOBILE_SAFARI_5_0_2_WEBKIT_533_17_9_APPLE_IPAD_TABLET
        )
      ).toBe(false);
    });

    it(
      'returns true if not iOS less than 8 or Android Browser less than 534.14',
      () => {
        expect(
          shouldAnimate(
            ANDROID_4_0_2_ANDROID_BROWSER_4_0_WEBKIT_534_30_SAMSUNG_GALAXY_NEXUS_MOBILE
          )
        ).toBe(true);
        expect(
          shouldAnimate(
            IOS_10_0_MOBILE_SAFARI_10_0_WEBKIT_602_1_38_APPLE_IPHONE_MOBILE
          )
        ).toBe(true);
      }
    );
  });

  describe('showUpgradeBanner', () => {
    const isOldIE = allPass([ isIE, isBrowserVersionLt('10') ]);
    const isOldFirefox = allPass([ isFirefox, isBrowserVersionLt('40') ]);
    const showUpgradeBanner = anyPass([ isOldIE, isOldFirefox ]);

    it('returns true if is old IE', () => {
      expect(
        showUpgradeBanner(WINDOWS_MOBILE_6_1_IE_4_01_ZTE_E_N72_MOBILE)
      ).toBe(true);
      expect(showUpgradeBanner(WINDOWS_XP_IE_6_0)).toBe(true);
    });

    it('returns true if is old Firefox', () => {
      expect(showUpgradeBanner(WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)).toBe(true);
      expect(showUpgradeBanner(WINDOWS_8_FIREFOX_20_0_GECKO_20_0)).toBe(true);
    });

    it('returns false if is anything else', () => {
      expect(showUpgradeBanner(WINDOWS_7_FIREFOX_40_1_GECKO_40_0)).toBe(false);
      expect(showUpgradeBanner(WINDOWS_7_IE_10_0_TRIDENT_6_0)).toBe(false);
      expect(
        showUpgradeBanner(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
      ).toBe(false);
    });
  });
});

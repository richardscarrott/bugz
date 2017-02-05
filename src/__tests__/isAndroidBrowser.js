import isAndroidBrowser from '../isAndroidBrowser';
import {
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE,
  ANDROID_2_2_1_ANDROID_BROWSER_4_0_WEBKIT_533_1_LG_P350_MOBILE,
  ANDROID_2_3_5_OPERA_MOBI_11_50_PRESTO_2_9_201,
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
} from '../../test/fixtures/userAgentStrings';

describe('isAndroidBrowser', () => {
  it('returns true if the browser is Android Browser', () => {
    expect(
      isAndroidBrowser(
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(true);
    expect(
      isAndroidBrowser(
        ANDROID_2_2_1_ANDROID_BROWSER_4_0_WEBKIT_533_1_LG_P350_MOBILE
      )
    ).toBe(true);
  });

  it('returns false if the browser is not Android Browser', () => {
    expect(
      isAndroidBrowser(ANDROID_2_3_5_OPERA_MOBI_11_50_PRESTO_2_9_201)
    ).toBe(false);
    expect(
      isAndroidBrowser(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
  });
});

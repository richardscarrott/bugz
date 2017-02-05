import isOpera from '../isOpera';
import {
  MINT_OPERA_10_10_PRESTO_2_2_15,
  WINDOWS_95_OPERA_6_01,
  ANDROID_2_3_5_OPERA_MOBI_11_50_PRESTO_2_9_201,
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isOpera', () => {
  it('returns true if the browser is Opera', () => {
    expect(isOpera(MINT_OPERA_10_10_PRESTO_2_2_15)).toBe(true);
    expect(isOpera(WINDOWS_95_OPERA_6_01)).toBe(true);
  });

  it('returns false if the browser is not Opera', () => {
    expect(isOpera(ANDROID_2_3_5_OPERA_MOBI_11_50_PRESTO_2_9_201)).toBe(false);
    expect(
      isOpera(ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE)
    ).toBe(false);
  });
});

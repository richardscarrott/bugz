import isOperaMobile from '../isOperaMobile';
import {
  ANDROID_2_3_5_OPERA_MOBI_11_50_PRESTO_2_9_201,
  SYMBIAN_OPERA_MOBI_10_00_PRESTO_2_4_18,
  WINDOWS_95_OPERA_6_01,
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isOperaMobile', () => {
  it('returns true if the browser is Opera Mobile', () => {
    expect(
      isOperaMobile(ANDROID_2_3_5_OPERA_MOBI_11_50_PRESTO_2_9_201)
    ).toBe(true);
    expect(isOperaMobile(SYMBIAN_OPERA_MOBI_10_00_PRESTO_2_4_18)).toBe(true);
  });

  it('returns false if the browser is not Opera Mobile', () => {
    expect(isOperaMobile(WINDOWS_95_OPERA_6_01)).toBe(false);
    expect(
      isOperaMobile(
        ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
      )
    ).toBe(false);
  });
});

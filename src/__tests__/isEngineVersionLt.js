import isEngineVersionLt from '../isEngineVersionLt';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE,
  WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0
} from '../../test/fixtures/userAgentStrings';

describe('isEngineVersionLt', () => {
  it('returns false if the engine version is equal', () => {
    expect(
      isEngineVersionLt(
        '536.11',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(false);
    expect(
      isEngineVersionLt(
        '3.1',
        WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE
      )
    ).toBe(false);
    expect(
      isEngineVersionLt('15', WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)
    ).toBe(false);
  });

  it('returns true if the engine version is less', () => {
    expect(
      isEngineVersionLt('537', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isEngineVersionLt(
        '4.1.3',
        WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE
      )
    ).toBe(true);
    expect(
      isEngineVersionLt('15.5', WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)
    ).toBe(true);
  });

  it('returns false if the engine version is greater', () => {
    expect(
      isEngineVersionLt(
        '463.1',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(false);
    expect(
      isEngineVersionLt(
        '3.0',
        WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE
      )
    ).toBe(false);
    expect(
      isEngineVersionLt('14.9', WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)
    ).toBe(false);
  });

  it('is curried', () => {
    const isLt546_11 = isEngineVersionLt('546.11');
    const isLt14 = isEngineVersionLt('14');
    expect(
      isLt546_11(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(isLt14(WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)).toBe(false);
  });
});

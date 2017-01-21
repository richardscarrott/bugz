import isEngineVersionGte from '../isEngineVersionGte';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  LYNX_2_8_5DEV_16_LYNX_2_8_5DEV_16,
  WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isEngineVersionGte', () => {
  it('returns true if the engine version is equal', () => {
    expect(
      isEngineVersionGte(
        '536.11',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(true);
    expect(
      isEngineVersionGte('1.8.5', LYNX_2_8_5DEV_16_LYNX_2_8_5DEV_16)
    ).toBe(true);
    expect(
      isEngineVersionGte(
        '3.1',
        WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE
      )
    ).toBe(true);
  });

  it('returns false if the engine version is less', () => {
    expect(
      isEngineVersionGte(
        '589.1',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(false);
    expect(
      isEngineVersionGte('2.8.6', LYNX_2_8_5DEV_16_LYNX_2_8_5DEV_16)
    ).toBe(false);
    expect(
      isEngineVersionGte(
        '3.2.0',
        WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE
      )
    ).toBe(false);
  });

  it('returns true if the engine version is greater', () => {
    expect(
      isEngineVersionGte('432', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isEngineVersionGte('2', LYNX_2_8_5DEV_16_LYNX_2_8_5DEV_16)
    ).toBe(true);
    expect(
      isEngineVersionGte(
        '3.0.1',
        WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE
      )
    ).toBe(true);
  });

  it('is curried', () => {
    const isGte536_11 = isEngineVersionGte('536.11');
    const isGte3 = isEngineVersionGte('3.0');
    expect(
      isGte536_11(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(isGte3(LYNX_2_8_5DEV_16_LYNX_2_8_5DEV_16)).toBe(false);
  });
});

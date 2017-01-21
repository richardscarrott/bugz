import isEngineVersionLte from '../isEngineVersionLte';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE,
  WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0
} from '../../test/fixtures/userAgentStrings';

describe('isEngineVersionLte', () => {
  it('returns true if the engine version is equal', () => {
    expect(
      isEngineVersionLte(
        '536.11',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(true);
    expect(
      isEngineVersionLte(
        '3.1.0',
        WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE
      )
    ).toBe(true);
    expect(
      isEngineVersionLte('15', WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)
    ).toBe(true);
  });

  it('returns true if the engine version is less', () => {
    expect(
      isEngineVersionLte(
        '536.19.1.2',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(true);
    expect(
      isEngineVersionLte(
        '4',
        WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE
      )
    ).toBe(true);
    expect(
      isEngineVersionLte('20.0.1', WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)
    ).toBe(true);
  });

  it('returns false if the engine version is greater', () => {
    expect(
      isEngineVersionLte(
        '120.4',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(false);
    expect(
      isEngineVersionLte(
        '3.0.1',
        WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE
      )
    ).toBe(false);
    expect(
      isEngineVersionLte('13.287', WINDOWS_7_FIREFOX_15_0A2_GECKO_15_0)
    ).toBe(false);
  });

  it('is curried', () => {
    const isLte536_11 = isEngineVersionLte('536.11');
    const isLte2 = isEngineVersionLte('2');
    expect(
      isLte536_11(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isLte2(WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE)
    ).toBe(false);
  });
});

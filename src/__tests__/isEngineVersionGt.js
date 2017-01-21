import isEngineVersionGt from '../isEngineVersionGt';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  FREEBSD_I386_EPIPHANY_1_2_6_GECKO_1_7,
  WINDOWS_7_IE_10_0_TRIDENT_6_0
} from '../../test/fixtures/userAgentStrings';

describe('isEngineVersionGt', () => {
  it('returns false if the engine version is equal', () => {
    expect(
      isEngineVersionGt(
        '536.11',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(false);
    expect(
      isEngineVersionGt('1.7', FREEBSD_I386_EPIPHANY_1_2_6_GECKO_1_7)
    ).toBe(false);
    expect(isEngineVersionGt('6', WINDOWS_7_IE_10_0_TRIDENT_6_0)).toBe(false);
  });

  it('returns false if the engine version is less', () => {
    expect(
      isEngineVersionGt(
        '536.12',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(false);
    expect(
      isEngineVersionGt('2', FREEBSD_I386_EPIPHANY_1_2_6_GECKO_1_7)
    ).toBe(false);
    expect(isEngineVersionGt('8.1', WINDOWS_7_IE_10_0_TRIDENT_6_0)).toBe(false);
  });

  it('returns true if the engine version is greater', () => {
    expect(
      isEngineVersionGt('536', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isEngineVersionGt('1.2.0', FREEBSD_I386_EPIPHANY_1_2_6_GECKO_1_7)
    ).toBe(true);
    expect(isEngineVersionGt('0.1', WINDOWS_7_IE_10_0_TRIDENT_6_0)).toBe(true);
  });

  it('is curried', () => {
    const isGt536 = isEngineVersionGt('536');
    const isGt6 = isEngineVersionGt('6');
    expect(isGt536(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)).toBe(true);
    expect(isGt6(WINDOWS_7_IE_10_0_TRIDENT_6_0)).toBe(false);
  });
});

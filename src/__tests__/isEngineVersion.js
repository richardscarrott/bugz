import isEngineVersion from '../isEngineVersion';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  WINDOWS_7_IE_10_0_TRIDENT_6_0
} from '../../test/fixtures/userAgentStrings';

describe('isEngineVersion', () => {
  it('returns true if the engine version matches', () => {
    expect(
      isEngineVersion('536.11', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(isEngineVersion('6', WINDOWS_7_IE_10_0_TRIDENT_6_0)).toBe(true);
  });

  it('returns false if the engine version does not match', () => {
    expect(
      isEngineVersion(
        '544.0.1',
        MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
      )
    ).toBe(false);
    expect(isEngineVersion('99', WINDOWS_7_IE_10_0_TRIDENT_6_0)).toBe(false);
  });

  it('is curried', () => {
    const is536_11 = isEngineVersion('536.11');
    const is99 = isEngineVersion('99');
    expect(
      is536_11(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(is99(WINDOWS_7_IE_10_0_TRIDENT_6_0)).toBe(false);
  });
});

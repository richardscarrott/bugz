import getEngineName from '../getEngineName';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  WINDOWS_XP_AVANT__TRIDENT_4_0
} from '../../test/fixtures/userAgentStrings';

describe('getEngineName', () => {
  it('returns the engine name', () => {
    expect(
      getEngineName(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe('WebKit');
    expect(getEngineName(WINDOWS_XP_AVANT__TRIDENT_4_0)).toBe('Trident');
  });
});

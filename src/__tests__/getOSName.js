import getOSName from '../getOSName';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  WINDOWS_XP_AVANT__TRIDENT_4_0
} from '../../test/fixtures/userAgentStrings';

describe('getOSName', () => {
  it('returns the OS name', () => {
    expect(
      getOSName(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe('Mac OS');
    expect(getOSName(WINDOWS_XP_AVANT__TRIDENT_4_0)).toBe('Windows');
  });
});

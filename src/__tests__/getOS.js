import getOS from '../getOS';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
} from '../../test/fixtures/userAgentStrings';

describe('getOS', () => {
  it('returns the OS name and version', () => {
    expect(
      getOS(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toEqual({ name: 'Mac OS', version: '10.7.3' });
  });
});

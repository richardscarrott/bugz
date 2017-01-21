import getEngineVersion from '../getEngineVersion';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  LINUX_I686_ICEAPE_2_0_14_GECKO_1_9_1_19
} from '../../test/fixtures/userAgentStrings';

describe('getEngineVersion', () => {
  it('returns the engine version', () => {
    expect(
      getEngineVersion(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe('536.11');
    expect(
      getEngineVersion(LINUX_I686_ICEAPE_2_0_14_GECKO_1_9_1_19)
    ).toBe('1.9.1.19');
  });
});

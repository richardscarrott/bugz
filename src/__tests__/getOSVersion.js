import getOSVersion from '../getOSVersion';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  LINUX_I686_ICEAPE_2_0_14_GECKO_1_9_1_19
} from '../../test/fixtures/userAgentStrings';

describe('getOSVersion', () => {
  it('returns the OS version', () => {
    expect(
      getOSVersion(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe('10.7.3');
    expect(getOSVersion(LINUX_I686_ICEAPE_2_0_14_GECKO_1_9_1_19)).toBe('i686');
  });
});

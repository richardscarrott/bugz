import isWindows from '../isWindows';
import {
  WINDOWS_10_EDGE_12_0_EDGEHTML_12_0,
  WINDOWS_7_IE_10_0_TRIDENT_6_0,
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  IOS_5_1_1_CHROME_19_0_1084_60_WEBKIT_534_46_0_APPLE_IPHONE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isWindows', () => {
  it('returns true if the engine is Windows', () => {
    expect(isWindows(WINDOWS_10_EDGE_12_0_EDGEHTML_12_0)).toBe(true);
    expect(isWindows(WINDOWS_7_IE_10_0_TRIDENT_6_0)).toBe(true);
  });

  it('returns false if the engine is not Windows', () => {
    expect(
      isWindows(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
    expect(
      isWindows(
        IOS_5_1_1_CHROME_19_0_1084_60_WEBKIT_534_46_0_APPLE_IPHONE_MOBILE
      )
    ).toBe(false);
  });
});

import isMacOS from '../isMacOS';
import {
  MAC_OS_10_7_3_CHROME_20_0_0_0_WEBKIT_536_11,
  MAC_OS_10_5_FIREFOX_3_0_3_GECKO_1_9_0_3,
  WINDOWS_10_EDGE_12_0_EDGEHTML_12_0,
  IOS_5_1_1_CHROME_19_0_1084_60_WEBKIT_534_46_0_APPLE_IPHONE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isMacOS', () => {
  it('returns true if the engine is Mac OS', () => {
    expect(isMacOS(MAC_OS_10_7_3_CHROME_20_0_0_0_WEBKIT_536_11)).toBe(true);
    expect(isMacOS(MAC_OS_10_5_FIREFOX_3_0_3_GECKO_1_9_0_3)).toBe(true);
  });

  it('returns false if the engine is not Mac OS', () => {
    expect(isMacOS(WINDOWS_10_EDGE_12_0_EDGEHTML_12_0)).toBe(false);
    expect(
      isMacOS(IOS_5_1_1_CHROME_19_0_1084_60_WEBKIT_534_46_0_APPLE_IPHONE_MOBILE)
    ).toBe(false);
  });
});

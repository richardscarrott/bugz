import isIE from '../isIE';
import {
  WINDOWS_7_IE_10_0_TRIDENT_6_0,
  WINDOWS_XP_IE_6_0,
  MAC_OS_10_5_FIREFOX_3_0_3_GECKO_1_9_0_3,
  WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isIE', () => {
  it('returns true if the browser is IE', () => {
    expect(isIE(WINDOWS_7_IE_10_0_TRIDENT_6_0)).toBe(true);
    expect(isIE(WINDOWS_XP_IE_6_0)).toBe(true);
  });

  it('returns false if the browser is not IE', () => {
    expect(isIE(MAC_OS_10_5_FIREFOX_3_0_3_GECKO_1_9_0_3)).toBe(false);
    expect(
      isIE(WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE)
    ).toBe(false);
  });
});

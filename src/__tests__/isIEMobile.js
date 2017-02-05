import isIEMobile from '../isIEMobile';
import {
  WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE,
  WINDOWS_CE_IEMOBILE_7_11_HTC_TOUCH_HD_T8282_MOBILE,
  WINDOWS_7_IE_10_0_TRIDENT_6_0,
  WINDOWS_10_EDGE_12_0_EDGEHTML_12_0
} from '../../test/fixtures/userAgentStrings';

describe('isIEMobile', () => {
  it('returns true if the browser is IE Mobile', () => {
    expect(
      isIEMobile(WINDOWS_PHONE_OS_7_0_IEMOBILE_7_0_TRIDENT_3_1_DELL_MOBILE)
    ).toBe(true);
    expect(
      isIEMobile(WINDOWS_CE_IEMOBILE_7_11_HTC_TOUCH_HD_T8282_MOBILE)
    ).toBe(true);
  });

  it('returns false if the browser is not IE Mobile', () => {
    expect(isIEMobile(WINDOWS_7_IE_10_0_TRIDENT_6_0)).toBe(false);
    expect(isIEMobile(WINDOWS_10_EDGE_12_0_EDGEHTML_12_0)).toBe(false);
  });
});

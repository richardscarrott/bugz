import isEdge from '../isEdge';
import {
  WINDOWS_10_EDGE_12_0_EDGEHTML_12_0,
  WINDOWS_10_EDGE_12_10136_EDGEHTML_12_10136,
  IOS_4_3_MOBILE_SAFARI_5_0_2_WEBKIT_533_17_9_APPLE_IPAD_TABLET,
  ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE
} from '../../test/fixtures/userAgentStrings';

describe('isEdge', () => {
  it('returns true if the browser is Edge', () => {
    expect(isEdge(WINDOWS_10_EDGE_12_0_EDGEHTML_12_0)).toBe(true);
    expect(isEdge(WINDOWS_10_EDGE_12_10136_EDGEHTML_12_10136)).toBe(true);
  });

  it('returns false if the browser is not Edge', () => {
    expect(
      isEdge(IOS_4_3_MOBILE_SAFARI_5_0_2_WEBKIT_533_17_9_APPLE_IPAD_TABLET)
    ).toBe(false);
    expect(
      isEdge(ANDROID_2_3_5_ANDROID_BROWSER_4_0_WEBKIT_533_1_HTC_DESIRE_MOBILE)
    ).toBe(false);
  });
});

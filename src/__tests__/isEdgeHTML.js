import isEdgeHTML from '../isEdgeHTML';
import {
  WINDOWS_10_EDGE_12_0_EDGEHTML_12_0,
  WINDOWS_10_EDGE_12_10136_EDGEHTML_12_10136,
  WINDOWS_7_IE_10_0_TRIDENT_6_0,
  WINDOWS_8_FIREFOX_20_0_GECKO_20_0
} from '../../test/fixtures/userAgentStrings';

describe('isEdgeHTML', () => {
  it('returns true if the engine is EdgeHTML', () => {
    expect(isEdgeHTML(WINDOWS_10_EDGE_12_0_EDGEHTML_12_0)).toBe(true);
    expect(isEdgeHTML(WINDOWS_10_EDGE_12_10136_EDGEHTML_12_10136)).toBe(true);
  });

  it('returns false if the engine is not EdgeHTML', () => {
    expect(isEdgeHTML(WINDOWS_7_IE_10_0_TRIDENT_6_0)).toBe(false);
    expect(isEdgeHTML(WINDOWS_8_FIREFOX_20_0_GECKO_20_0)).toBe(false);
  });
});

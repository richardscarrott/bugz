import isEngineName from '../isEngineName';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11,
  FREEBSD_I386_EPIPHANY_1_2_6_GECKO_1_7
} from '../../test/fixtures/userAgentStrings';

describe('isEngineName', () => {
  it('returns true if the engine matches', () => {
    expect(
      isEngineName('WebKit', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isEngineName('Gecko', FREEBSD_I386_EPIPHANY_1_2_6_GECKO_1_7)
    ).toBe(true);
  });

  it('returns false if the engine does not match', () => {
    expect(
      isEngineName('Gecko', MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
    expect(
      isEngineName('Trident', FREEBSD_I386_EPIPHANY_1_2_6_GECKO_1_7)
    ).toBe(false);
  });

  it('is curried', () => {
    const isWebKit = isEngineName('WebKit');
    const isGecko = isEngineName('Gecko');
    expect(
      isWebKit(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(true);
    expect(
      isGecko(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toBe(false);
  });
});

import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
} from '../../test/fixtures/userAgentStrings';
import getEngine from '../getEngine';

describe('getEngine', () => {
  it('returns the engine name and version', () => {
    expect(
      getEngine(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toEqual({ name: 'WebKit', version: '536.11' });
  });
});

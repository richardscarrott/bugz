import getBrowser from '../getBrowser';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
} from '../../test/fixtures/userAgentStrings';

describe('getBrowser', () => {
  it('returns the browser name, version and major version', () => {
    expect(
      getBrowser(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11)
    ).toEqual({ name: 'Chrome', version: '20.0.1132.57', major: '20' });
  });
});

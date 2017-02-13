jest.mock('../internal/console', () => {
  return { table: jest.fn() };
});
jest.mock('../parse', () => {
  return jest.fn().mockReturnValue('parse');
});

import about from '../about';
import console from '../internal/console';
import {
  MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11
} from '../../test/fixtures/userAgentStrings';

describe('about', () => {
  it('logs the browser, engine and os information', () => {
    about(MAC_OS_10_7_3_CHROME_20_0_1132_57_WEBKIT_536_11);
    expect(console.table).toBeCalledWith('parse');
  });
});

import trimChar from '../trimChar';

describe('trimChar', () => {
  it('strips leading and trailing chars', () => {
    expect(trimChar('f', 'foo')).toBe('oo');
    expect(trimChar('o', 'foo')).toBe('f');
    expect(trimChar('o', 'foof')).toBe('foof');
    expect(trimChar('f', 'foof')).toBe('oo');
    expect(trimChar('f', 'ffffooffff')).toBe('oo');
  });
});

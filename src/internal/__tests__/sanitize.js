import sanitize from '../sanitize';

describe('sanitize', () => {
  it('strips any leading non numeric chars', () => {
    expect(sanitize('a3.0.3')).toBe('3.0.3');
    expect(sanitize('abc4.5.1')).toBe('4.5.1');
    expect(sanitize('abc_.6.77.3')).toBe('6.77.3');
    expect(sanitize('a-1.11')).toBe('1.11');
    expect(sanitize('a*112.13')).toBe('112.13');
    expect(sanitize('?a19.28.0')).toBe('19.28.0');
  });

  it(
    'strips *all* trailing chars after the first non numeric char found after the first numeric char',
    () => {
      expect(sanitize('a3.0.3a1')).toBe('3.0.3');
      expect(sanitize('abc4.5.1abc')).toBe('4.5.1');
      expect(sanitize('abc_6.77.3ab4c_')).toBe('6.77.3');
      expect(sanitize('a-1.11-2')).toBe('1.11');
      expect(sanitize('a*112.13a2*')).toBe('112.13');
      expect(sanitize('?a19.28.0?a')).toBe('19.28.0');
      expect(sanitize('?a19.28.0.?a')).toBe('19.28.0');
    }
  );

  it('handles non numeric input', () => {
    expect(sanitize('')).toBe('');
    expect(sanitize('abc')).toBe('');
    expect(sanitize('?')).toBe('');
    expect(sanitize('?abc_')).toBe('');
    expect(sanitize('?ab._')).toBe('');
  });

  it('handles non string input', () => {
    expect(sanitize(void 0)).toBe('');
    expect(sanitize(null)).toBe('');
    expect(sanitize(false)).toBe('');
    expect(sanitize(true)).toBe('');
    expect(sanitize(0)).toBe('');
    expect(sanitize(12)).toBe('');
    expect(sanitize(/erm/)).toBe('');
    expect(sanitize([])).toBe('');
    expect(sanitize({})).toBe('');
    expect(sanitize(Object.create(null))).toBe('');
    expect(sanitize(new Date())).toBe('');
  });
});

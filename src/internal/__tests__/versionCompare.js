import { equals, lte, lt, gte, gt } from '../versionCompare';

const ascVersions = [
  '0',
  '0.1',
  '0.1.2',
  '0.1.2.3',
  '0.1.2.3.4',
  '1',
  '1.22',
  '1.22.2',
  '1.22.2.3',
  '1.22.2.3.4',
  '1.111',
  '1.111.2',
  '1.111.2.3',
  '1.111.2.3.4',
  '11',
  '11.1',
  '11.1.2',
  '11.1.2.3',
  '11.1.2.3.4'
];

const descVersions = ascVersions.slice(0).reverse();

describe('equals', () => {
  it('returns true if a is equal to b', () => {
    expect(equals('0', '0')).toBe(true);
    expect(equals('11', '11')).toBe(true);
    expect(equals('222', '222')).toBe(true);
    expect(equals('0.0', '0.0.0.0')).toBe(true);
    expect(equals('0.1', '0.1')).toBe(true);
    expect(equals('1', '1.0')).toBe(true);
    expect(equals('2', '2.0.0')).toBe(true);
    expect(equals('22', '22.0.0.0')).toBe(true);
    expect(equals('22.0.11', '22.0.11.0')).toBe(true);
  });

  it('returns false if a is not equal to b ', () => {
    expect(equals('0', '1')).toBe(false);
    expect(equals('11', '12')).toBe(false);
    expect(equals('222', '2222')).toBe(false);
    expect(equals('0.3', '0.1')).toBe(false);
    expect(equals('1', '1.1')).toBe(false);
    expect(equals('2', '2.0.2')).toBe(false);
    expect(equals('22', '22.0.1.2')).toBe(false);
    expect(equals('22.0.11', '22.0.111.0')).toBe(false);
  });

  it('is curried', () => {
    const equals1_1_0 = equals('1.1.0');
    expect(equals1_1_0('1.1.0')).toBe(true);
    expect(equals1_1_0('1.2.1')).toBe(false);
  });
});

describe('lte', () => {
  it('returns true if a is less than or equal to b ', () => {
    ascVersions.forEach((a, i) => {
      const rest = ascVersions.slice(i);
      rest.forEach(b => {
        expect(lte(a, b)).toBe(true);
      });
    });
  });

  it('returns false if a is greater than b ', () => {
    descVersions.forEach((a, i) => {
      const rest = descVersions.slice(i + 1);
      rest.forEach(b => {
        expect(lte(a, b)).toBe(false);
      });
    });
  });

  it('is curried', () => {
    const lte1_1_0 = lte('1.1.0');
    expect(lte1_1_0('1.1.0')).toBe(true);
    expect(lte1_1_0('1.2')).toBe(true);
    expect(lte1_1_0('0.1')).toBe(false);
  });
});

describe('lt', () => {
  it('returns true if a is less than b ', () => {
    ascVersions.forEach((a, i) => {
      const rest = ascVersions.slice(i + 1);
      rest.forEach(b => {
        expect(lt(a, b)).toBe(true);
      });
    });
  });

  it('returns false if a is greater or equal to b ', () => {
    descVersions.forEach((a, i) => {
      const rest = descVersions.slice(i);
      rest.forEach(b => {
        expect(lt(a, b)).toBe(false);
      });
    });
  });

  it('is curried', () => {
    const lt1_1_0 = lt('1.1.0');
    expect(lt1_1_0('2.1')).toBe(true);
    expect(lt1_1_0('0.1')).toBe(false);
  });
});

describe('gte', () => {
  it('returns true if a is greater than or equal to b ', () => {
    descVersions.forEach((a, i) => {
      const rest = descVersions.slice(i);
      rest.forEach(b => {
        expect(gte(a, b)).toBe(true);
      });
    });
  });

  it('returns false if a is less than b ', () => {
    ascVersions.forEach((a, i) => {
      const rest = ascVersions.slice(i + 1);
      rest.forEach(b => {
        expect(gte(a, b)).toBe(false);
      });
    });
  });

  it('is curried', () => {
    const gte1_1_0 = gte('1.1.0');
    expect(gte1_1_0('1.1.0')).toBe(true);
    expect(gte1_1_0('0.2.0')).toBe(true);
    expect(gte1_1_0('1.2')).toBe(false);
  });
});

describe('gt', () => {
  it('returns true if a is greater than b ', () => {
    descVersions.forEach((a, i) => {
      const rest = descVersions.slice(i + 1);
      rest.forEach(b => {
        expect(gt(a, b)).toBe(true);
      });
    });
  });

  it('returns false if a is less than or equal to b ', () => {
    ascVersions.forEach((a, i) => {
      const rest = ascVersions.slice(i);
      rest.forEach(b => {
        expect(gt(a, b)).toBe(false);
      });
    });
  });

  it('is curried', () => {
    const gt1_1_0 = gt('1.1.0');
    expect(gt1_1_0('0.1.1')).toBe(true);
    expect(gt1_1_0('1.2.0')).toBe(false);
  });
});

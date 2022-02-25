import Utils from './Utils';

test('format date in DD/MM/YYYY format', () => {
  expect(Utils.customDate('')).toBe('Invalid date');
  expect(Utils.customDate('20-12-2040')).toBe('20 December,2040');
});

test('format date in DD-MM-YYYY format', () => {
  expect(Utils.customeDateMinus('30 April,1995')).toBe('30-04-1995');
  expect(Utils.customeDateMinus('1 May,2000')).toBe('01-05-2000');
});

test('format date in YYYY-DD-MM format', () => {
  expect(Utils.customeDateMinusYMD('30 April,1995')).toBe('1995-30-04');
  expect(Utils.customeDateMinusYMD('1 May,2000')).toBe('2000-01-05');
});

test('format date in YYYY-MM-DD to DD-MM-YYYY format', () => {
  expect(Utils.customeDateYMDtoDMY('30-04-1995')).toBe('1995-04-30');
  expect(Utils.customeDateYMDtoDMY('01-05-2000')).toBe('2000-05-01');
});

test('format date in DD MMMM,YYYY format', () => {
  expect(Utils.customDateFormat('1995-04-30')).toBe('30 April,1995');
  expect(Utils.customDateFormat('2000-05-01')).toBe('01 May,2000');
});

test('format date in DD-MM-YYYY 3 format', () => {
  expect(Utils.customDateDL('30-05-2050')).toBe('30 May,2050');
  expect(Utils.customDateDL('24-09-2029')).toBe('24 September,2029');
});

test('extract DL Date', () => {
  expect(Utils.getDlDdate('')).toBe('');
  expect(Utils.getDlDdate('27-07-2010 to 30-12-2040')).toBe('30-12-2040');
  expect(Utils.getDlDdate('30-12-2040')).toBe('30-12-2040');
});

test('extract custom Passport Date', () => {
  expect(Utils.customDatePassport('')).toBe('Invalid date');
  expect(Utils.customDatePassport('20 December,2040')).toBe('20/12/2040');
  expect(Utils.customDatePassport('30 April,1995')).toBe('30/04/1995');
  expect(Utils.customDatePassport('1 May,2000')).toBe('01/05/2000');
});

test('extract Full Date', () => {
  expect(Utils.checkFullDate('')).toBe('Invalid date');
  expect(Utils.checkFullDate('2040')).toBe('2040');
  expect(Utils.checkFullDate('30-12-2040')).toBe('20 December,2030');
});

test('extract get Addr Line 40', () => {
  expect(Utils.getAddrLine40(null)).toBe(null);
  expect(Utils.getAddrLine80('')).toBe(null);
  expect(
    Utils.getAddrLine40(
      'Lotus Lap Playing Public School, H.No.0119, Lalitha Nagar, Play Hall',
    ),
  ).toBe('Lotus Lap Playing Public School, H.No.01');
  expect(Utils.getAddrLine40('Lotus Lap')).toBe('Lotus Lap');
});

test('extract get Addr Line 80', () => {
  expect(Utils.getAddrLine80(null)).toBe(null);
  expect(Utils.getAddrLine80('')).toBe(null);
  expect(
    Utils.getAddrLine80(
      'Lotus Lap Playing Public School, H.No.0119, Lalitha Nagar, Play Hall',
    ),
  ).toBe('19, Lalitha Nagar, Play Hall');
  expect(Utils.getAddrLine80('Lotus Lap')).toBe(null);
});

test('extract get Name Line 50', () => {
  expect(Utils.getNameLen50(null)).toBe(null);
  expect(Utils.getNameLen50('')).toBe(null);
  expect(
    Utils.getNameLen50(
      'Lotus Lap Playing Public School, H.No.0119, Lalitha Nagar, Play Hall, Pune, India',
    ),
  ).toBe('Lotus Lap Playing Public School, H.No.0119, Lalith');
  expect(Utils.getNameLen50('Lotus Lap')).toBe('Lotus Lap');
});

test('should return correct age value', () => {
  expect(Utils.getAge('01 December,2003')).not.toBeNull();
  expect(Utils.getAge('01 December,2003')).toBeDefined();
  expect(Utils.getAge('01 December,2003')).toBe(18);
  expect(Utils.getAge('01 December,2021')).toBe(0);
  expect(Utils.getAge(null)).toBe(0);
});

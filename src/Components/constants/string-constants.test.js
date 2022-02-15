import StringConstants from './string-constants';

const { SCREEN_NAME } = StringConstants;

describe('Test for String Constants', () => {
  it('should not have same screen names', () => {
    const totalScreenNames = Object.values(SCREEN_NAME).map(v => v.trim());
    const screenHasSameNames = [
      ...new Set(totalScreenNames.filter((item, index) => totalScreenNames.indexOf(item) !== index)),
    ];
    expect(screenHasSameNames).toStrictEqual([]);
  });
});

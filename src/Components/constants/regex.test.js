import regex from './regex';

describe('regex', () => {
  it('should match the snapshot', () => {
    expect(regex).toMatchSnapshot();
  });

  describe('Tests for NAME_VALIDATION', () => {
    it.each`
      incorrectValue
      ${'12'}
      ${'#'}
    `('should return false when regex is executed and value is $incorrectValue', ({ incorrectValue }) => {
      expect(regex.NAME_VALIDATION.test(incorrectValue)).toStrictEqual(false);
    });

    it.each`
      correctValue | valueType
      ${' '}       | ${'empty space'}
      ${'.'}       | ${'full stop'}
      ${'abc'}     | ${'alphabets in small case'}
      ${'ABC'}     | ${'alphabets in capital case'}
      ${"'"}       | ${'apostrophe'}
    `('should return true when regex is executed and value is $valueType', ({ correctValue }) => {
      expect(regex.NAME_VALIDATION.test(correctValue)).toStrictEqual(true);
    });
  });

  describe('Tests for TEXT_VALIDATION', () => {
    it.each`
      incorrectValue
      ${'12'}
      ${'#'}
      ${'.'}
    `('should return false when regex is executed and value is $incorrectValue', ({ incorrectValue }) => {
      expect(regex.TEXT_VALIDATION.test(incorrectValue)).toStrictEqual(false);
    });

    it.each`
      correctValue | valueType
      ${' '}       | ${'empty space'}
      ${'abc'}     | ${'alphabets in small case'}
      ${'ABC'}     | ${'alphabets in capital case'}
    `('should return true when regex is executed and value is $valueType', ({ correctValue }) => {
      expect(regex.TEXT_VALIDATION.test(correctValue)).toStrictEqual(true);
    });
  });

  describe('Tests for GSTIN_VALIDATION', () => {
    it.each`
      incorrectValue       | valueType
      ${'a8AABCU9603R1ZM'} | ${'alphabet in 1st'}
      ${'1aAABCU9603R1ZM'} | ${'alphabet in 2nd place and 1 in 1st'}
      ${'00AABCU9603R1ZM'} | ${'0 in 2nd place and 0 in 1st'}
      ${'38AABCU9603R1ZM'} | ${'8 in 2nd place and 3 in 1st'}
      ${'39AABCU9603R1ZM'} | ${'9 in 2nd place and 3 in 1st'}
      ${'18AABC89603R1ZM'} | ${'number in 7th place'}
      ${'18AABCU960TR1ZM'} | ${'alphabet in 11th place'}
      ${'18AABCU960321ZM'} | ${'number in 12th place'}
      ${'18AABCU9603R#ZM'} | ${'special character in 13th place'}
      ${'18AABCU9603R1AM'} | ${'non valid alphabet in 14th place'}
      ${'18AABCU9603R1Z&'} | ${'special character in 15th place'}
    `('should return false when regex is executed and gst number has $valueType', ({ incorrectValue }) => {
      expect(regex.GSTIN_VALIDATION.test(incorrectValue)).toStrictEqual(false);
    });

    it.each`
      correctValue         | valueType
      ${'01AABCU9603R1ZM'} | ${'0 in 1st'}
      ${'10AABCU9603R1ZM'} | ${'0 in 2nd place and 1 in 1st'}
      ${'37AABCU9603R1ZM'} | ${'3 in 1st'}
      ${'18AABCu9603R1ZM'} | ${'small case in 7th place'}
      ${'18AABCU9603r1ZM'} | ${'small case in 12th place'}
      ${'18AABCU9603RTZM'} | ${'alphabet in 13th place'}
      ${'18AABCU9603RtZM'} | ${'small case alphabet in 13th place'}
      ${'18AABCU9603R1zM'} | ${'small case z in 14th place'}
      ${'18AABCU9603R1Z9'} | ${'number in 15th place'}
    `('should return true when regex is executed and gst number has $valueType', ({ correctValue }) => {
      expect(regex.GSTIN_VALIDATION.test(correctValue)).toStrictEqual(true);
    });
  });

  describe('Tests for MOBILE_NUMBER_VALIDATION', () => {
    it.each`
      incorrectValue        | valueType
      ${'0123456789'}       | ${'+ missing as first character'}
      ${'*0123456789'}      | ${'* is not first character'}
      ${'+91-123456'}       | ${'no other special character must be added after + in first place'}
      ${'+12a3456789'}      | ${'No alphabets allowed'}
      ${'+12345678'}        | ${'Minimum 9 digits required after +'}
      ${'+123456789012345'} | ${'Maximum 14 digits allowed after +'}
    `('should return false when regex is executed and mobile number has $valueType', ({ incorrectValue }) => {
      expect(regex.MOBILE_NUMBER_VALIDATION.test(incorrectValue)).toStrictEqual(false);
    });

    it.each`
      correctValue         | valueType
      ${'+123456789'}      | ${'+ followed by 9 digits'}
      ${'+1234567890'}     | ${'+ followed by 10 digits'}
      ${'+12345678901'}    | ${'+ followed by 11 digits'}
      ${'+123456789012'}   | ${'+ followed by 12 digits'}
      ${'+1234567890123'}  | ${'+ followed by 13 digits'}
      ${'+12345678901234'} | ${'+ followed by 14 digits'}
    `('should return true when regex is executed and mobile number has $valueType', ({ correctValue }) => {
      expect(regex.MOBILE_NUMBER_VALIDATION.test(correctValue)).toStrictEqual(true);
    });
  });

  describe('Tests for INTEGER_VALIDATION_REGEX', () => {
    it('should pass for a valid integer value', () => {
      expect(regex.INTEGER_VALIDATION_REGEX.test(12345)).toStrictEqual(true);
    });

    it('should fail for a value with decimals', () => {
      expect(regex.INTEGER_VALIDATION_REGEX.test(12345.12)).toStrictEqual(false);
    });
  });
});

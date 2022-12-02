import ConsoleLogHelper from './ConsoleLogHelper';

test('Console Log Helper test', () => {
  expect(ConsoleLogHelper.log('', '')).toBeUndefined();
  expect(ConsoleLogHelper.log('>>>', 'log message')).toBeUndefined();
});

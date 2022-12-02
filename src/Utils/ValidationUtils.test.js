import {
    isValidMobileNo,
    isValidEmailId,
    isValidPan,
    isValidAadhar
} from './ValidationUtils';

test('isValidMobileNo test', () => {
    expect(isValidMobileNo('9028997828')).toBeDefined();
    expect(isValidMobileNo('9028997')).toBeDefined();
});
test('isValidEmailId test', () => {
    expect(isValidEmailId('test@gmail.com')).toBeDefined();
    expect(isValidEmailId('test@gmail')).toBeDefined();
});
test('isValidPan test', () => {
    expect(isValidPan('ABCDE1234A')).toBeDefined();
    expect(isValidPan('AAAAAAA')).toBeDefined();
});
test('isValidAadhar test', () => {
    expect(isValidAadhar('123456789012')).toBeDefined();
    expect(isValidAadhar('1234556')).toBeDefined();
});
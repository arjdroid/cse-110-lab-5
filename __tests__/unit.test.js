// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('is phone number 1', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('is phone number 2', () => {
    expect(isPhoneNumber('(098) 765-4321')).toBe(true);
});

test('is not phone number 1', () => {
    expect(isPhoneNumber('qwertyuiop')).toBe(false);
});
test('is not phone number 2', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
});

test('is email 1', () => {
    expect(isEmail('example@example.com')).toBe(true);
});
test('is email 2', () => {
    expect(isEmail('asdf_asdf@example.com')).toBe(true);
});

test('is not email 1', () => {
    expect(isEmail('qwert@yuiop')).toBe(false);
});
test('is not email 2', () => {
    expect(isEmail('1234567890')).toBe(false);
});

test('is strong pwd 1', () => {
    expect(isStrongPassword('asdf1234_56')).toBe(true);
});
test('is strong pwd 2', () => {
    expect(isStrongPassword('fdsa_6543_21')).toBe(true);
});

test('is not strong pwd 1', () => {
    expect(isStrongPassword('qwert@yuiop')).toBe(false);
});
test('is not strong pwd 2', () => {
    expect(isStrongPassword('1234567890')).toBe(false);
});

test('is date 1', () => {
    expect(isDate('1/1/2024')).toBe(true);
});
test('is date 2', () => {
    expect(isDate('12/31/2000')).toBe(true);
});

test('is not date 1', () => {
    expect(isDate('2024-01-01')).toBe(false);
});
test('is not date 2', () => {
    expect(isDate('13/1/24')).toBe(false);
});

test('is hex color 1', () => {
    expect(isHexColor('#a3f')).toBe(true);
});
test('is hex color 2', () => {
    expect(isHexColor('ff00cc')).toBe(true);
});

test('is not hex color 1', () => {
    expect(isHexColor('#gg0000')).toBe(false);
});
test('is not hex color 2', () => {
    expect(isHexColor('#12345')).toBe(false);
});
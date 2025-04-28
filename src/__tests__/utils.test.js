const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  test('should return true for a palindrome like "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('should return false for a non-palindrome like "car"', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('should return true for mixed case palindromes like "Racecar"', () => {
    expect(isPalindrome('Racecar')).toBe(true);
  });

  test('should return false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('should throw an error for non-alphabetic characters', () => {
    expect(() => isPalindrome('racecar123')).toThrow('Input must contain only alphabetic characters');
  });

  test('should throw an error for non-string input', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });

  test('should return true for a single character like "a"', () => {
    expect(isPalindrome('a')).toBe(true);
  });
});
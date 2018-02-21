const isPalindrome = require('../lib/palindromeCheck.js');
const longPalindrome = require('../lib/palindromeLong.js');

describe('Is Palindrome', () => {
  describe("when it's a simple non-palindrome", () => {
    it('should return false', () => {
      const result = isPalindrome('derp');
      expect(result).toBe(false);
    });
  });

  describe("when it's a punctuated, sentence-like non-palindrome", () => {
    it('should return false', () => {
      const result = isPalindrome('So long, and thanks for all the fish!');
      expect(result).toBe(false);
    });
  });

  describe("when it's a simple palindrome", () => {
    it('should return true', () => {
      const result = isPalindrome('racecar');
      expect(result).toBe(true);
    });
  });

  describe("when it's a punctuated, sentence-like palindrome ", () => {
    it('should return true', () => {
      const result = isPalindrome("Go hang a salami, I'm a lasagna hog!");
      expect(result).toBe(true);
    });
  });

  describe("when it's a ridiculous 17,826-word palindrome ", () => {
    it('should return true', () => {
      const result = isPalindrome(longPalindrome);
      expect(result).toBe(true);
    });
  });
});

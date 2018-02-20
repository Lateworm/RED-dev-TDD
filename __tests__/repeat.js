const repeat = require('../lib/repeat.js');

describe('Is Palindrome', () => {
  describe('when given 3 consecutive matching characters', () => {
    it('should return false', () => {
      const result = repeat('aaabbbccc');
      expect(result).toBe('a3b3c3');
    });
  });

  describe('when given 3 consecutive matching characters', () => {
    it('should return false', () => {
      const result = repeat('ghjff');
      expect(result).toBe('g1h1j1f2');
    });
  });
});

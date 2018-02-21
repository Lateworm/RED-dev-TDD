const repeat = require('../lib/repeat.js');

describe('Repeat', () => {
  describe('when given a string', () => {
    it('should return a string indicating the number of consecutive matching characters', () => {
      const result = repeat('aaabbbccc');
      expect(result).toBe('a3b3c3');
    });
  });

  describe('when given a string', () => {
    it('should return a string indicating the number of consecutive matching characters', () => {
      const result = repeat('ghjff');
      expect(result).toBe('g1h1j1f2');
    });
  });

  describe('when given a number', () => {
    it('should return a string indicating the number of consecutive matching characters', () => {
      const result = repeat(333);
      expect(result).toBe('33');
    });
  });
});

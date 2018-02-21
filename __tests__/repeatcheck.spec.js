const repeat = require('../lib/repeatCheck.js');

describe('Repeat', () => {
  describe('when given a string featuring 3 consecutive matching characters', () => {
    it('should return a string reflecting the 3  consecutive matching characters', () => {
      const result = repeat('aaabbbccc');
      expect(result).toBe('a3b3c3');
    });
  });

  describe('when given a string featuring a mix of unique and matching consecutive characters', () => {
    it('should return a string indicating both the unique and matching characters', () => {
      const result = repeat('ghjff');
      expect(result).toBe('g1h1j1f2');
    });
  });

  describe('when given a string containing spaces', () => {
    it('should return a string indicating the number of consecutive matching characters and spaces', () => {
      const result = repeat('aaa   bbb c');
      expect(result).toBe('a3 3b3 1c1');
    });
  });

  describe('when given a number', () => {
    it('should return a string indicating the number of consecutive matching characters', () => {
      const result = repeat(333);
      expect(result).toBe('33');
    });
  });
});

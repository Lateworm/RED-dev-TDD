const uniqueCheck = require('../lib/uniqueCheck.js');

describe('Repeat', () => {
  describe('when given a string featuring some repeated and some unique characters', () => {
    test('should return the first unique character', () => {
      expect(uniqueCheck('dddeeefggghhh')).toBe('f');
    });
  });

  describe('when given a string featuring some repeated and some unique characters', () => {
    test('should return the first unique character', () => {
      expect(uniqueCheck('terfg')).toBe('t');
    });
  });

  describe('when given a string featuring some repeated and some unique characters', () => {
    test('should return the first unique character', () => {
      expect(uniqueCheck('frof')).toBe('r');
    });
  });

  describe('when given a string featuring no unique characters', () => {
    test('should return undefined', () => {
      expect(uniqueCheck('tttttt')).toBe(undefined);
    });
  });
});

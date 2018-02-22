const minNotIn = require('../lib/minNotIn.js');

describe('Repeat', () => {
  describe('when given an array of integers', () => {
    test('should return the lowest positive integer that is not represented', () => {
      expect(minNotIn([1, 3, 6, 4, 1, 2])).toBe(5);
    });
  });

  describe('when given a large array of integers', () => {
    it('should perform the same function with good performance', () => {
      const range = [];
      for (let i = 0; i <= 9000; i += 1) {
        // you can modify the for condition to test a REALLY big array
        range.push(i);
      }
      expect(minNotIn(range)).toBe(9001);
    });
  });

  describe('when given an empty array', () => {
    test('should return 1', () => {
      expect(minNotIn([])).toBe(1);
    });
  });

  describe('when given a string instead of an array', () => {
    test('should return an informative error message', () => {
      expect(() => {
        minNotIn('136412');
      }).toThrowError('Expected an array as input, received another type.');
    });
  });

  describe('when given a number instead of an array', () => {
    test('should throw an an informative error', () => {
      expect(() => {
        minNotIn(136412);
      }).toThrowError('Expected an array as input, received another type.');
    });
  });
});

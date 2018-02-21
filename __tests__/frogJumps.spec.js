const frogJumps = require('../lib/frogJumps.js');

describe('Frogs a Jumpin', () => {
  describe('when start is equal to end', () => {
    it('should return 0', () => {
      const result = frogJumps(10, 10, 5);
      expect(result).toBe(0);
    });
  });

  describe('when start is equal to end', () => {
    it('should return 0', () => {
      const result = frogJumps(100, 100, 5);
      expect(result).toBe(0);
    });
  });

  describe('when start is less than end', () => {
    it('should return a positive integer', () => {
      const result = frogJumps(5, 10, 5);
      expect(result).toBe(1);
    });
  });

  describe('when start is greater than end', () => {
    it('should return a positive integer', () => {
      const result = frogJumps(10, 5, 5);
      expect(result).toBe(1);
    });
  });

  describe('when the traversal is not completed in a discreet number of jumps', () => {
    it('should return a positive integer', () => {
      const result = frogJumps(10, 4.9, 5);
      expect(result).toBe(2);
    });
  });

  describe('when the frog does not jump', () => {
    it('should return a positive integer', () => {
      const result = frogJumps(5, 10, 0);
      expect(result).toBe(Infinity);
    });
  });

  describe('when the frog crossess the road in less than onejump', () => {
    it('should return a positive integer', () => {
      const result = frogJumps(5, 10, 10);
      expect(result).toBe(1);
    });
  });
});

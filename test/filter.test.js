const { filter } = require('../filter')

describe('Filter', () => {
  it('should return items in proper order 1', (done) => {
    const coll = [5, 4, 1, 2, 6, 7, 8, 3];
    const randomTimeout = () => Math.ceil(Math.random() * 10);
    filter(coll, (item, callback) => {
      setTimeout(() => callback(null, item % 2 === 0), randomTimeout());
    }, (err, result) => {
      expect(result).toEqual([4, 2, 6, 8]);
      done();
    });
  });

  it('should return items in proper order 2', (done) => {
    const coll = [5, 4, 1, 2, 6, 7, 3, 8];
    const randomTimeout = () => Math.ceil(Math.random() * 10);
    filter(coll, (item, callback) => {
      setTimeout(() => callback(null, item % 2 === 1), randomTimeout());
    }, (err, result) => {
      expect(result).toEqual([5, 1, 7, 3]);
      done();
    });
  });

  it('should return items in proper order 3', (done) => {
    const coll = [2, 8, 2, 1, 1, 3, 7, 10, 1, 4];
    filter(coll, (item, callback) => {
      setTimeout(() => callback(null, item % 2 === 0), item);
    }, (err, result) => {
      expect(result).toEqual([2, 8, 2, 10, 4]);
      done();
    });
  });

  it('should work with empty array', (done) => {
    const coll = [];
    filter(coll, (item, callback) => {
      callback(null, item % 2 === 0);
    }, (err, result) => {
      expect(result).toEqual([]);
      done();
    });
  });

  it('should work without providing callback', (done) => {
    const coll = [];
    filter(coll, (item, callback) => {
      callback(null, item % 2 === 0);
    });
    done();
  });

  it('should work with falsy', (done) => {
    const coll = [0, -1, -2, 3, -4];
    filter(coll, (item, callback) => {
      callback(null, item <= 0);
    }, (err, result) => {
      expect(result).toEqual([0, -1, -2, -4]);
      done();
    });
  });
});

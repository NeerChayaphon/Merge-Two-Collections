// create a test for the merge function using chai
import { expect } from 'chai';
import { merge } from './merge';

describe('merge two sorted arrays', () => {
  it('should merge two sorted arrays', () => {
    const collection = [1, 3, 5, 7, 9];
    const collection2 = [2, 4, 6, 8, 10];
    const mergedCollection = merge(collection, collection2);
    expect(mergedCollection).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should merge two sorted arrays of different lengths (first one is has shorter length)', () => {
    const collection = [1, 3, 5, 7, 9];
    const collection2 = [2, 4, 6, 8, 10, 11];
    const mergedCollection = merge(collection, collection2);
    expect(mergedCollection).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  it('should merge two sorted arrays of different lengths (Second one is has shorter length)', () => {
    const collection = [1, 3, 5, 7, 9, 11, 13, 15];
    const collection2 = [2, 4, 6, 8, 10];
    const mergedCollection = merge(collection, collection2);
    expect(mergedCollection).to.eql([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15,
    ]);
  });
});

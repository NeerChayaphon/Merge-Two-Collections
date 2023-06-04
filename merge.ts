export const merge = (
  collection: number[],
  collection2: number[]
): number[] => {
  // this is to store all the merged collection result
  const mergedCollection: number[] = [];
  let i = 0;
  let j = 0;

  // the two arrays are sorted, so we can compare the first element of each array
  // and push the smaller one to the mergedCollection
  while (i < collection.length && j < collection2.length) {
    if (collection[i] < collection2[j]) {
      mergedCollection.push(collection[i]);
      i++;
    } else {
      mergedCollection.push(collection2[j]);
      j++;
    }
  }

  // if there are still elements in collection, push them to the mergedCollection
  while (i < collection.length) {
    mergedCollection.push(collection[i]);
    i++;
  }
  while (j < collection2.length) {
    mergedCollection.push(collection2[j]);
    j++;
  }

  return mergedCollection;
};

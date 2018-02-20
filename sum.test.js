const sum = require('./sum');
const arrayMethods = require('./arrayMethods');

test('adds 1 + 2 to equl 3', () => {
  // expect - returns an expectation object
  // toBe - matcher that can be called on the expectation object
  expect(sum(1,2)).toBe(3);
});


test('First arg is an array. 2nd arg is value to be filtered out of array', () => {
  const arr = [1,2,2,3,4,2];
  const target = 2;
  
  // toEqual => recursively checks each field in object / array.
  expect(arrayMethods.filter(arr, target)).toEqual([1,3,4]);
});

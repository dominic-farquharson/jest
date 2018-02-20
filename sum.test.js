const sum = require('./sum');

test('adds 1 + 2 to equl 3', () => {
  // expect - returns an expectation object
  // toBe - matcher that can be called on the expectation object
  expect(sum(1,2)).toBe(3);
});

# Jest

## Expect Function

Used everytime you want to test a value. Expect is normally used with a matcher function to assert something about a value.

The argument passed to the Expect function is the value that your code produces. 

```js
test('the best flavor is grapefruit', () => {
  // toBe is the matcher function
  expect(bestLaCroixFlavor()).toBe('grapefruit');
});

```


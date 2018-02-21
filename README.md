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
## Describe Function

Creates a block that groups together several related tests in one "test suite." Helps you to organize your tests into groups.

`describe(name, fn)`

```js
const myBeverage = {
  delicious: true,
  sour: false,
};

// grouping tests together using the describe function
describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  t);
});

```

Can also nest describe blocks.

```js
describe('binaryStringToNumber', () => {
  describe('given an invalid binary string', () => {
    test('composed of non-numbers throws CustomError', () => {
      expect(() => binaryStringToNumber('abc')).toThrowError(CustomError);
    });

    test('with extra whitespace throws CustomError', () => {
      expect(() => binaryStringToNumber('  100')).toThrowError(CustomError);
    });
  });

  describe('given a valid binary string', () => {
    test('returns the correct number', () => {
      expect(binaryStringToNumber('100')).toBe(4);
    });
  });
```

## References

- [Describe](https://facebook.github.io/jest/docs/en/api.html#describename-fn)

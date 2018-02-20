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
  });
});

```

const sum = require('./sum');
const arrayMethods = require('./arrayMethods');
const Game = require('./game'); // represents constructor function

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

test('Takes numbers as arugments and returns an array of those numbers', () => {
 // check if returnArray is not undefined
 expect(arrayMethods.returnArray).toBeDefined();
 
 // check if returnArray is a function
  expect(arrayMethods.returnArray).toBeInstanceOf(Function);
  expect(arrayMethods.returnArray(1,2,3)).toBeInstanceOf(Array);
});

describe('game function', () => {
 const player = 'Steve';
 const game = new Game(player);
 test('invoking game returns an instance of game', () => {
  expect(game).toBeInstanceOf(Game);
 });

 test('Player property is correctly set', () => {
  expect(game.player).toBe(player);
 });
 
 test('Game has a method called numberOfTurns', () => {
   expect(game.numberOfTurns).toBeDefined();
   expect(game.numberOfTurns).toBeInstanceOf(Function);
 });

 test('Invoking changeTurn, increases turns property by 1 and returns the new number of turns.', () => {
   const turns = game.numberOfTurns();
   expect(game.changeTurn()).toBe(turns + 1);

 });
});




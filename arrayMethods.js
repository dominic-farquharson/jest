// filters given value out of the array
function filter(arr, val) {
  return arr.filter(el => el !== val);
}

// takes numbers as arguments, and returns an array of those numbers
function returnArray() {
 return [...arguments];
}

module.exports = {
  filter,
  returnArray
};

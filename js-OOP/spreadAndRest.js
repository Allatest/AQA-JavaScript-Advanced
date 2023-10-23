// Task 1
const var1 = [1, 2, 3];
const var2 = [4, 5, 6];

const mergedArray = [...var1, ...var2];

console.log(mergedArray);

// Task 2
function multiply(multiplier, ...args) {
  const result = args.map((value) => multiplier * value);
  return result;
}

const result = multiply(4, 9, 83, 3);
console.log(result);

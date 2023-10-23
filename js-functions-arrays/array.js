// Task 3
let nestedArray = [
  ["apple", "banana", "dog"],
  ["cherry", "cat", "elephant"],
  ["red", "green", "cat"]
];

for (const iterator of nestedArray) {
  for (const cat of iterator) {
    console.log(cat);
  }
}

function findCatInNestedArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "cat") {
        console.log("Array contains 'cat'.");
        return;
      }
    }
  }
  console.log("Array does not contain 'cat'.");
}

findCatInNestedArray(nestedArray);

// Task 4
function divideArray(numbers) {
  let result = [10, 2, 5];
  try {
    if (numbers.length < 2) {
      throw new Error("There must be at least two numbers in the array.");
    }
    for (let i = 1; i < numbers.length; i++) {
      if (
        typeof numbers[i - 1] !== "number" ||
        typeof numbers[i] !== "number" ||
        numbers[i - 1] === 0
      ) {
        throw new Error("Invalid input");
      }
      result.push(numbers[i] / numbers[i - 1]);
    }
    return result;
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Робота завершена");
  }
}

console.log(divideArray([10, 2, 5])); // True
console.log(divideArray([5, 0, 2])); // False

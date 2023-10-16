const array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56];
const oddNumbers = array.filter(number => number % 2 !== 0);
console.log(oddNumbers);

const colors = ["yellow", "green", "apple", "red", "pink"];
const sortedArray = colors.sort((a,b) => a.localeCompare (b))
console.log(sortedArray);

//Task 6
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2);
console.log(mergedArray);

//Task 7
const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);



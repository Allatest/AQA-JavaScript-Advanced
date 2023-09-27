//Завдання 3
let myValue = "5.489";
console.log(myValue);
let myNumber = parseFloat(myValue);
console.log(myNumber);
let isNotNaN = !isNaN(myNumber);
console.log(isNotNaN);
myNumber = Math.round(myNumber * 10) / 10;
console.log(myNumber);
let myNewValue = myNumber.toString();
console.log(myNewValue);
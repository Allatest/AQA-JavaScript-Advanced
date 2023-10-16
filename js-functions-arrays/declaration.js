// function declaration
function calculateValueADevideValueB(valueA, valueB) {
    let valueC = valueA / valueB;
    return valueC;
}

let result = calculateValueADevideValueB(10, 5);
console.log(result);

// function expression
function funcExpcalculateValueADevideValueB(valueA, valueB) {
    let valueC = valueA / valueB;
    return valueC;
}

let resultExp = funcExpcalculateValueADevideValueB(24, 2);
console.log(resultExp);

// arrow function
const devideNumbersArrow = (valueA, valueB) => {
    return valueA / valueB;
}

const resultArrow = devideNumbersArrow(8, 4);
console.log(resultArrow);

// Task 2

function recursiveFunction(value) {
    console.log(value);

    if (value < 5) {
        recursiveFunction(value + 1);
    }
}

recursiveFunction(2);






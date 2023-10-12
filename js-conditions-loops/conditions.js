// Завдання 1
let yearsOfExperience = 5;
let baseSalary = 0;
let bonus = 0;

if (yearsOfExperience >= 0.5 && yearsOfExperience < 1) {
    baseSalary = 100;
    bonus = 0.01 * baseSalary;
} else if (yearsOfExperience >= 1 && yearsOfExperience < 2) {
    baseSalary = 333;
    bonus = 0.03 * baseSalary;
} else if (yearsOfExperience >= 2 && yearsOfExperience < 4) {
    baseSalary = 555;
    bonus = 0.04 * baseSalary;
} else if (yearsOfExperience >= 4) {
    baseSalary = 666;
    bonus = yearsOfExperience * baseSalary;
}

console.log(baseSalary);
console.log(bonus);

// Завдання 2
let month = 10; 

switch (month) {
    case 1:
        console.log("Січень");
        break;
    case 2:
        console.log("Лютий");
        break;
    case 3:
        console.log("Березень");
        break;
    case 4:
        console.log("Квітень");
        break;
    case 5:
        console.log("Травень");
        break;
    case 6:
        console.log("Червень");
        break;
    case 7:
        console.log("Липень");
        break;
    case 8:
        console.log("Серпень");
        break;
    case 9:
        console.log("Вересень");
        break;
    case 10:
        console.log("Жовтень");
        break;
    case 11:
        console.log("Листопад");
        break;
    case 12:
        console.log("Грудень");
        break;
    default:
        console.log("Невірний номер місяця");
}

// Завдання 3
for (let i = 2; i <= 30; i += 2) {
    if (i === 22) {
        continue;
    }
    console.log(i);
}

// Завдання 4
let numberA = 4;
let numberB = 8;
let biggerNumber = numberA > numberB ? numberA : numberB;
console.log(biggerNumber);

// Завдання 5
let text = "Javascript is fun";
let i = 0;

while (i < text.length) {
    if (text[i] === "a") {
        i++;
        continue;
    }
    if (text[i] === "n") {
        break;
    }
    console.log(text[i]);
    i++;
}

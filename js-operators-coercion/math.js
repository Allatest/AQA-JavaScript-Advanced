let radius = 2; // Радіус кола
let length = 3; // Довжина прямокутника
let width = 4; // Ширина прямокутника
let height = 7; // Висота циліндра

let circleArea = Math.PI * Math.pow(radius, 2);
console.log(circleArea);

let rectangleArea = length * width;
console.log(rectangleArea);

let cylinderVolume = Math.PI * Math.pow(radius, 2) * height;
console.log(cylinderVolume);

circleArea = circleArea.toFixed(2);
console.log(circleArea);
rectangleArea = rectangleArea.toFixed(2);
console.log(rectangleArea);
cylinderVolume = cylinderVolume.toFixed(2);
console.log(cylinderVolume);



// Task 4
class CarClass {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
  }

  getCarInfo() {
    return `Car Info: ${this.year} ${this.make} ${this.model}`;
  }

  accelerate(speed) {
    this.speed += speed;
  }

  brake(speed) {
    this.speed -= speed;
  }
}

class AudiClass extends CarClass {
  constructor(make, model, year, color) {
    super(make, model, year);
    this.color = color;
  }

  getCarInfo() {
    return `Car Info: ${this.year} ${this.make} ${this.model}, Color: ${this.color}`;
  }

  get myCurrentColor() {
    return this.color;
  }

  set myCurrentColor(newColor) {
    this.color = newColor;
  }
}

const myAudi = new AudiClass("Audi", "A5", 2022, "Grey");

console.log(myAudi.getCarInfo());

myAudi.accelerate(120);
myAudi.brake(50);
console.log(myAudi.getCarInfo());
console.log(`Current Color: ${myAudi.myCurrentColor}`);

myAudi.myCurrentColor = "Black";
console.log(`Updated Color: ${myAudi.myCurrentColor}`);

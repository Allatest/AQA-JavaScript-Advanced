class ProductClass {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }

  purchase(quantity) {
    if (this.quantity >= quantity && quantity > 0) {
      this.quantity -= quantity;
      console.log(`Куплено ${quantity} одиниць товару ${this.name}.`);
    } else {
      console.log(`Не вдалося купити ${quantity} одиниць товару ${this.name}.`);
    }
  }
}

const tShirt = new ProductClass("T-Shirt", 20, 100);
const sweater = new ProductClass("Sweater", 30, 75);
const shoes = new ProductClass("Shoes", 50, 50);

// Виведення загальної вартості для кожного товару
console.log(tShirt.getTotalPrice());
console.log(sweater.getTotalPrice());
console.log(shoes.getTotalPrice());

// Покупка певної кількості товару
tShirt.purchase(5);
sweater.purchase(10);
shoes.purchase(60);

// Виведення залишку товару на складі після покупки
console.log(tShirt);
console.log(sweater);
console.log(shoes);

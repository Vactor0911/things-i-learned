// Constructor 생성자
function Class(name, var1, var2) {
  this.name = name;
  this.var1 = var1;
  this.var2 = var2;
}

const class1 = new Class("Class1", 1, 2);

console.log(class1);

// Class 클래스
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price}`);
  }
}

const product1 = new Product("Shirt", 19.99);
product1.display();

// Static 정적
class MathUtil {
  static PI = 3.141592;

  static getDiameter(radius) {
    return 2 * radius;
  }
}

console.log(MathUtil.PI); // 3.141592
console.log(MathUtil.getDiameter(10)); // 20

// Inheritance 상속
class Animal {
  static count = 0;

  constructor() {
    Animal.count++;
  }

  display() {
    console.log(`This is ${this.name}`);
  }
}

class Dog extends Animal {
  name = "Dog";
}

class Cat extends Animal {
  name = "Cat";
}

const dog = new Dog();
const cat = new Cat();
console.log(Animal.count); // 2
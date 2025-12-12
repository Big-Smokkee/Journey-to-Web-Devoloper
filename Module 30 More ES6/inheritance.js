class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating from parent`);
    }
}
class Dog extends Animal {
    constructor(name, breed, age) {
        super(name, age);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
};
class Cat extends Animal {
    constructor(name, color, age) {
        super(name, age);
        this.color = color;
    }
    eat() {
        console.log(`${this.name} is eating from child`);
    }
    meow() {
        console.log(`${this.name} is meowing`);
    }
};

class Bird extends Animal {
    constructor(name, species, age) {
        super(name, age);
        this.species = species;
    }
    eat() {
        console.log(`${this.name} is not eating`);
    }
    fly() {
        console.log(`${this.name} is flying`);
    }
};



const dog1 = new Dog('Coffee', 'Deshi', 6);
const cat1 = new Cat('SP', 'White', 5);
const bird1 = new Bird('kokil', 'deshi', 2);
console.log(dog1);
dog1.eat();
console.log(cat1);
cat1.eat();
console.log(bird1);
bird1.eat();
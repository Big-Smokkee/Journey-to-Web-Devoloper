class Vehicle {
    //encapsulation use korte # diye property name dite hobe
    #tin;
    constructor(type, brand, price) {
        this.type = type;
        this.brand = brand;
        this.price = price;
        this.#tin = '1234advsd';
    }
    getThis() {
        console.log(this);
    }
    getTin() {
        return this.#tin;
    }
    getPrice() {
        return this.price;
    }
};
const car1 = new Vehicle('car', 'Honda', 5000000);
const toyota = new Vehicle('car', 'Toyota', 4000000);
// car1.getThis();
// console.log(car1.getPrice());
// console.log(toyota.getPrice());
console.log(toyota.getTin());

const student = {
    name: 'Rahul Dravid',
    score: 10000,
    getScore: function () {
        console.log(this);
    }
};
student.getScore();
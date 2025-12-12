// const product = {
//     name: "shirt",
//     price: 500,
//     quantity: 7
// };
// 1st way
// const discount = product.price * 20 / 100;
// const yourPay = product.price - discount;
// const vatAmount = product.price * 7 / 100;
// const totalAmount = yourPay + vatAmount;

// 2nd way
// const price = product.price;

// const discount = price * 20 / 100;
// const yourPay = price - discount;
// const vatAmount = price * 7 / 100;
// const totalAmount = yourPay + vatAmount;

// 3rd way
// const price = product.price;

// const discount = price * 20 / 100;
// const yourPay = price - discount;
// const vatAmount = price * 7 / 100;
// const totalAmount = yourPay + vatAmount;

// destructurring way

const { name, price, quantity
} = {
    name: "shirt",
    price: 500,
    quantity: 7
};
console.log(name, price, quantity);

//jodi beshi naam dei = er baam aee ..r sheita jodi = er daan aee na thake tahole undefined dibe
// -------------
// abarooo
const device = {
    name: 'phone',
    brand: 'Samsung',
    price: 17000
};
const { brand } = device;
console.log(brand);

/// ------------Array-----------
const [math, physics] = [90, 99];
console.log(math, physics);
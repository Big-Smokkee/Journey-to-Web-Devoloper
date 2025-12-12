var orangePrice = 20;
var chocolate = 0.5;
var applePrice = '26';

console.log(typeof orangePrice);
console.log(typeof applePrice);
//using parseInt
console.log(applePrice + orangePrice);
console.log(parseInt(applePrice) + orangePrice);


applePrice = 'asdjhasfuiadsr';
console.log(parseInt(applePrice) + orangePrice);


applePrice = 26.50;
console.log(`before using parseInt applePrice is ${applePrice}`);
console.log(`after using parseInt applePrice is ${parseInt(applePrice)}`);

console.log(`before using parseFloat applePrice is ${applePrice}`);
applePrice = '26.999';
console.log(parseFloat(applePrice) + orangePrice);

var hesko = 50 - '21';
console.log(typeof hesko);


const a = isNaN(4 - 'hello');
console.log(a);
const b = isNaN('4');
console.log(b);
const c = isNaN(4 - 10);
console.log(c);
const products = [10, 20, 30];
const comp_products = products; // referce shoho copy kore

comp_products[1] = 90;
// console.log(products);
// console.log(comp_products);


// ekhon eta off korar jonno
const numbers = [1, 2, 3, 4];
const new_numbers = Array.from(numbers);
new_numbers.push(8);
console.log(numbers);
console.log(new_numbers);
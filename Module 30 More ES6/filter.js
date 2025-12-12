const numbers = [1, 5, 16, 10, 45, 2, 7];
const greaterThan10 = numbers.filter(x => x > 10);
console.log(greaterThan10);
const jhawali = numbers.filter((x, index) => {
    return x > 10 && index >= 3;
});
console.log(jhawali);

//filtering even numbers
const evenNumbers = numbers.filter(x => {
    return x % 2 == 0;
})
console.log(evenNumbers);
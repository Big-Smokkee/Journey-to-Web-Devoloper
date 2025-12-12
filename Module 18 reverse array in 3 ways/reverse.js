let numbers = [1, 2, 3, 4, 5];

let reverse = [];
//1st
// for (let i = numbers.length - 1; i >= 0; i--)
// {
//     reverse.push(numbers[i]);
// }

//2nd
// for (let i =0; i < numbers.length; i++)
// {
//     reverse.unshift(numbers[i]);
// }

//3rd
// for (let number of numbers) {
//     reverse.unshift(number);
// }

//4th
reverse =numbers.reverse();
console.log(reverse);
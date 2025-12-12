const age = 2;
// if (age >= 18)
// {
//     console.log("You can Vote");
// }
// else
// {
//     console.log("Ghumaya thako");
// }

//1st example
let res;
age >= 18 ? res = "Vote dite parba" : res = "Possible na";
console.log(res);


//2nd example

let price = 510;
let isLeader = true;

price = isLeader === true ? 0 : price + 100;
console.log(price);

// 3rd example

price = 5000;
isLeader = false;
console.log('3rd example');
price = isLeader === true ? (price >  1000 ? price / 2 : 0) : price + 100;
console.log(price);
let numbers = [6, 7, 2, 14, 3, 5, 1];
numbers.sort();
console.log(numbers);

let friends = ["sakib", 'nakib', 'rakib', 'bakib', 'fahim'];
friends.sort();
console.log(friends);

let ages = [1, 5, 100, 8, 2, 28, 500];
// ages.sort();
console.log(ages);

//ultimate sorting

///ascending
// let sortedAges = ages.sort(function (a, b) {
//     return a - b;
// });
// console.log(sortedAges);
let sortedAges = ages.sort(function (a, b) {
    return b - a;
});
console.log(sortedAges);
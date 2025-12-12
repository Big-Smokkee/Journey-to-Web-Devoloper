const numbers = [4, 8, 2, 3, 5];

// const doubled = [];
// for (const num of numbers) {
//     const res = num * 2;
//     doubled.push(res);
// }

// const doubleIt = x => x * 2;
// const doubled = numbers.map(doubleIt);

const doubled = numbers.map(x => x * 2);
const squared = numbers.map(num => Math.pow(num, 2));
const friends = ['javed', 'mafid', 'kotnel'];
const firstCharOfFriends = friends.map(str => str[0] + 'F');
console.log(doubled);
console.log(squared);
console.log(firstCharOfFriends);


const result = numbers.map((num, index) => {
    return num * index;
})
console.log(result);
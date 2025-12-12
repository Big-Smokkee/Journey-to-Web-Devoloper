const numbers = [87, 8, 5, 91];
console.log(numbers);
console.log(...numbers);

const max = Math.max(...numbers);
console.log(max);

//2nd  exapmle
// const first = [1, 2, 3, 4, 5];
// const second = first;

// second.push(6);
// console.log(first);


const first = [1, 2, 3, 4, 5];
const second = [...first];
const third = [0, ...first, 75, 97, 56];
second.push(6);
console.log(first);
console.log(second);
console.log(third);

const person = {
    name: 'Faraz',
    age: 24
};
const employee = {
    designation: 'Dev',
    salary: 30000,
    ...person
};

console.log(employee);

const total = (a, b, c) => a + b + c;
const digits = [1, 2, 3];
console.log(total(...digits));
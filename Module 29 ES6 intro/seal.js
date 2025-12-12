const employee = {
    name: "raja Rani",
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}
Object.seal(employee);
employee.experience++;
delete employee.experience;

console.log(employee);

let a = 12, b = 3;

[a, b] = [b, a];
console.log(a, b);
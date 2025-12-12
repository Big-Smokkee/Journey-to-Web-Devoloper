const employee = {
    name: "raja Rani",
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

Object.freeze(employee);
delete employee.experience;
console.log(employee); 
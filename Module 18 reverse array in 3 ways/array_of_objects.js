const employees = [
    { name: 'Ashik', designation: 'Content Writer', Salary: 25000 },
    { name: 'Atik', designation: 'Developer', Salary: 29000 },
    { name: 'Abdul Rahim', designation: 'Digital Marketer', Salary: 21000 }
    
];

// console.log(employees);
console.log(employees[1]);
console.log(employees[1].Salary + 200);

for (let employee of employees) {
    console.log(employee.Salary , employee.designation);
}
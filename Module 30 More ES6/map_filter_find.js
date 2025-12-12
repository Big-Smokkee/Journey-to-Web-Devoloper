const students = [
    { id: 1, name: 'abul', marks: 50 },
    { id: 2, name: 'dabul', marks: 95 },
    { id: 3, name: 'kabul', marks: 55 },
    { id: 4, name: 'Nabul', marks: 15 }
];
const names = students.map(student => student.name);
const goodStudents = students.filter(student => student.marks > 50);
const goodStudent = students.find(student => student.marks > 80);
console.log(names);
console.log(goodStudents);
console.log(goodStudent);
const student = {
    name: 'Rafid',
    1: 50,
    family: {
        title: 'bhuiyan',
        // mother: {
        //     name: 'Noor Jahan',
        //     age: 45
        // }
    },
    marks: 90,
    'home-address': 'Yeasin Market'
};
console.log(student.family.mother?.age);
const bottle = {
    brand: 'apple',
    price: 45,
    color: "white",
    isClean: false
};

const subject = {
    name: 'biology',
    teacher: 'rasheda madam',
    examDate: '30 Feb',
    chapters: ["first", 'second', 'third'],
    exams: {
        name: "final",
        highestMark: 98
    },
    styles: function () {
        console.log("Ami thik moto porabo");
    }
};

// console.log(subject); //pura object
console.log(subject.name);
subject.styles();
// console.log(bottle.);

subject.fav = ["Ali kodom", 'rangamait'];
console.log(subject);
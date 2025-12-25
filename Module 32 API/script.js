const person = {
    name: "selim",
    fruit: "dalim",
    dish: "halim",
    friends: ["alim", "kolim", "lamim"],
    isRich: false,
    money: 34000
};

console.log(person);

//object to JSON -->string
const personJSON = JSON.stringify(person);
console.log(personJSON);

//JSON -->string to object
const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);
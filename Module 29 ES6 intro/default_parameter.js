// function sum(num1, num2) {
//     const total = num1 + num2;
//     console.log(num1, num2, total);
// }

// sum(10, 20);
// sum(10);

// what if
function sum(num1 = 0, num2 = 0) {
    const total = num1 + num2;
    console.log(num1, num2, total);
}

sum(10, 20);
sum(10); // ebar r undefiner er karone isNanN ashe nai

/*
    some thumb rule of default value. May be useful
    add, subtract --> 0
    multiply, divide --> 1
    string --> ""
    object -->{}
*/
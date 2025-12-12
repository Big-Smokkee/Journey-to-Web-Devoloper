const arrow = (num1, num2) => num1 + num2;
const mult = (a, b) => a * b;
console.log(arrow(2, 3));
console.log(mult(5, 8));

const isFirstBig = (a, b) => { return a >= b };
console.log(isFirstBig(8, 8));

///Multiline arrow function
const doMath = (a, b) => {
    const makeDouble = a * 2;
    const againDouble = b * 2;
    const result = makeDouble + againDouble;
    return result;
}
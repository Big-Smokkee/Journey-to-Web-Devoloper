// function counter() {
//     let count = 0;
//     function innerFunction() {
//         console.log('Inside the inner Function, some one called me');
//     }
//     return innerFunction;
// }

// const output = counter();
// console.log(output());

function counter() {
    let count = 0;

    return function (user) {
        count = count + 1;
        console.log('Inside the inner function', user, count);

    }
}
const output = counter();
// console.log(output());
// console.log(output);
output('Rahim');
output('Rahim');
output('Rahim');
output('Rahim');
const input = counter();
input('Karim');
input('Karim');
input('Karim');
input('Karim');
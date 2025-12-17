let money;
console.log(money);

function total2(a, b) {
    console.log('Value of parameters', a, b);
    if (a === undefined || b === undefined) {
        return;
    }
    if (a && b) {
        const sum = a + b;
        return sum;
    }
}
console.log(total2(1));
const phone = {
    brand: 'Samsu', price: 12500
};
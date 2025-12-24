function multiply(x, y) {
    const mult = x * y;
    return mult;
}

const result = multiply(5, 7);
// console.log(result);

const manik = { name: 'manik', balance: 5000 };
const roton = { name: 'roton', balance: 4000 };

console.log('before call', manik, roton);

function totalMoney(person1, person2) {
    person1.balance = 0;
    person2.balance /= 2;
    const total = person1.balance + person2.balance
    return total;
}

const balance = totalMoney(manik, roton);
console.log('ater call', manik, roton);
console.log(balance);
function layeredDiscountedTotal(quantity)
{
    let total;
    const first100Price = 100;
    const secondt100Price = 90;
    const above200Price = 70;

    if (quantity <= 100) {
        total = quantity * first100Price;
        return total;
    }
    else if (quantity <= 200) {
        let first100total = 100 * first100Price;
        quantity = quantity - 100;
        total = quantity * secondt100Price;
        return total + first100total;
    }
    else{
        let first100total = 100 * first100Price;
        quantity = quantity - 100;
        let second100total = 100 * secondt100Price;
        quantity = quantity - 100; 
        total = quantity * above200Price;
        return total + first100total + second100total;
    }
}
const myTotalCost = layeredDiscountedTotal(201);
console.log(myTotalCost);
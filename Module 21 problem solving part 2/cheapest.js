// Find the cheapest phone from an array of phone objects


const mobiles = [
    { name: 'Samsung', price: 20000, color: 'Black' },
    { name: 'Xiomi', price: 18000, color: 'White' },
    { name: 'Oppo', price: 25000, color: 'Yellow' },
    { name: 'IPhone', price: 140000, color: 'Ash' },
    { name: 'Symphony', price: 13000, color: 'Purple' }
    
];
function findCheapestMobile(mobiles) {
    let cheapestMobilePrice = mobiles[0].price;
    let cheapestMobileName = mobiles[0].name;
    for (let varients of mobiles) {
        // console.log(varients);
        if (cheapestMobilePrice > varients.price) {
            cheapestMobilePrice = varients.price;
            cheapestMobileName = varients.name;
        }
    }
    return "The name of the cheapest mobile is: " + cheapestMobileName + " and its price is: " + cheapestMobilePrice + ".";
}

const answer = findCheapestMobile(mobiles);
console.log(answer);
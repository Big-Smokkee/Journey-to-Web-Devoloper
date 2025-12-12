const products = [
    {name: "shampoo", price: 300, quanitiy: 4},
    {name: "chiruni", price: 100, quanitiy: 1},
    {name: "shirt", price: 700, quanitiy: 2},
    {name: "pant", price: 1200, quanitiy: 2}
]
// function getShoppingTotal(products)
// {
//     let sum = 0;
//     for (let product of products)
//     {
//         sum += product.price;
//     }
//     return sum;
// }


function cartTotal(products)
{
    let sum = 0;
    for (let product of products)
    {
        let thisProductPrice = product.price * product.quanitiy;
        sum = sum + thisProductPrice;
    }
    return sum;
}
// const total = getShoppingTotal(products);
const total = cartTotal(products);
console.log(total);
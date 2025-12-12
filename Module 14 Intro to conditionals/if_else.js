const salary = 25001;
const isBCS = true;
const height = 66;

if (salary > 25000 || height > 72)
{
    console.log("Eso babaa kobul");
}
else
{
    console.log("vaag mokbuul");
}

console.log('Multi Level if else');
const price = 1000;
if (price >= 5000) {
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (price > 2500)
{
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log(price);
}
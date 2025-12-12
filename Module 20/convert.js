//1 feet = 12inch
// function inchToFeet(inch)
// {
//     return inch / 12;
// }
// function feetToInch(feet)
// {
//     return feet * 12;
// }
function inchToFeet2(inch)
{
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    // return feetNumber;
    let res = '';
    if (inch % 12 == 0)
    {
        res = feetNumber + ' feet';
    }
    else
    {
        let remainingInch = inch % 12;
        res = feetNumber + ' feet ' + remainingInch + " inch";
    }

    return res;
}

function milesToKM(miles)
{
    // return 1.609344 * miles;
    const kmInMeter = 1.609344 * miles * 1000;
    const kmNumber = parseInt(1.609344 * miles);
    let res = '';
    if (kmInMeter % 1000 == 0)
    {
        res = kmNumber + ' KM.';
    }
    else
    {
        let remainingMeters = (kmInMeter % 1000);
        
        res = kmNumber + ' Kilo Meters ' + remainingMeters.toFixed(2) + " Meters.";
    }

    return res;
}
const farazHeight = inchToFeet2(76);
console.log(farazHeight);

const valueInKM = milesToKM(5);
console.log(valueInKM); 
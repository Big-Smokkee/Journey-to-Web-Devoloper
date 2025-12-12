const numbers = [1, 61, 5, 5, 81, 5, 61, 87, 81];
const biriyaniKhor = ['Faraz', 'seyam', 'Abir', 'seyam', 'Abir'];
function noDuplicate(array)
{
    let finalArray = [];
    for (let value of array)
    {
        if (!finalArray.includes(value))
            finalArray.push(value);
    }
    return finalArray;
}
const uniqueArray = noDuplicate(biriyaniKhor);
// console.log(uniqueArray);
for (var i = 0; i < 5; i++) {
 	 setTimeout(function () {
 	console.log(i);
  }, 100);
}
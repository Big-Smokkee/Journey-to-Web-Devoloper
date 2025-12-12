let sentence = 'I am learning Web development';
// let reverse = sentence.reverse();
// console.log(reverse);
let reverse = '';
for (let i of sentence)
{
    reverse = reverse + i;
    // reverse= i+ reverse;
}

console.log(reverse);
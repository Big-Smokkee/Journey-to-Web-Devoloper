let data;
console.log('value of data', data);
if (data) {
    console.log('Value of data is truthy');
}
else
    console.log('Value of data is falsy');
//by default undefined is falsy


data = '';
console.log("Empty string");
console.log('value of data', data);
if (data) {
    console.log('Value of data is truthy');
}
else
    console.log('Value of data is falsy');
//by default undefined is falsy
data = ' ';
console.log('value of data when white space', data);
if (data) {
    console.log('Value of data is truthy');
}
else
    console.log('Value of data is falsy');


//kintu ekta white space jodi vule oo diya diii..tahole truthy hoye jabe


//empty object truthy
data = {};
data = [];
console.log('value of data when empty object and array', data);
if (data) {
    console.log('Value of data is truthy');
}
else
    console.log('Value of data is falsy');


//if I need to capture the falsy value to go inside if block
// by  using logical not
if (!data) {
    console.log("inside is with a falsy value")
}

//capture all positive value
//double not !!
//capture any value to boolean (true false)

if (!!data === true) {
    console.log('Only true inside the double not');
}
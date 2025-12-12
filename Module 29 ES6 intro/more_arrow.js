const getTax = (amount, taxRate) => amount * (taxRate / 100);

//single parameter
const getSquare = (x) => x * x;
console.log(getSquare(8));

//single array pass
const firstElement = nums => nums[0];
console.log(firstElement([51, 54, 99]));

//double array pass
const sumOfFirstElement = (nums1, nums2) => nums1[0] + nums2[0];
console.log(sumOfFirstElement([10, 20, 30], [90, 80, 7]));

// without any parameter
const logIt = () => console.log("Hello");
logIt();

/* Anonymous function */
// document.getElementById("").addEventListener("click", () => {
    
// })
// type 2
// document.getElementById("btn-click").addEventListener("click", event => {
    
// });
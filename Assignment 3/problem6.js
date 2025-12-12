/** Problem 06 :  (Current Salary )  */
var experience = 0;
var startingSalary = 15000;
//write your code here
var current = startingSalary;
for (var i = 1; i <= experience; i++) {
    current = current *1.05;
}
console.log(current.toFixed(2));
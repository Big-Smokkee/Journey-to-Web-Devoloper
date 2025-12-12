/** Problem 05 - ( PH Email Generator )  */
var student = { name: "mewo", roll: 96, department: "cse" };
//write your code here
var result = "";
for(props in student){
    result = result + student[props];
}
console.log(result + "@ph.ac.bd");
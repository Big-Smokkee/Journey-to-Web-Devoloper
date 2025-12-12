/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var res1 = area / 2;
console.log(res1);

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here
if (money >= 25000)
{
    console.log("Laptop");
}
else if (money >= 10000)
{
    console.log("Cycle");
}
else
{
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 6 ;
//write your code here
for (let i = 1; i <= lastDay; i++)
{
    if (i % 3 == 0)
    {
        console.log(i + " - medicine");
    }
    else {
        console.log(i + " - rest");
    }
}

/** Problem 04 - (Delete / Store) */
var fileName= "slipdf.txt";
//write your code here
if (fileName[0] == '#')
{
    console.log("Store");
}
else if (fileName.includes(".pdf") === true ||fileName.includes(".docx") === true )
{
    console.log("Store");      
}
else
{
    console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "mewo", roll: 96, department: "cse" };
//write your code here
var result = "";
for(props in student){
    result = result + student[props];
}
console.log(result + "@ph.ac.bd");

/** Problem 06 :  (Current Salary )  */
var experience = 0;
var startingSalary = 15000;
//write your code here
var current = startingSalary;
for (var i = 1; i <= experience; i++) {
    current = current *1.05;
}
console.log(current.toFixed(2));
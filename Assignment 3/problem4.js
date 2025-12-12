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
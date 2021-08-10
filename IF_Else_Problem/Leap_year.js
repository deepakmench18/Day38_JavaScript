const prompt = require("prompt-sync")();
const year = prompt("Enter a Year");
if((year % 400 ==0) && (year % 4 == 0) || (year%100!=0)) 
{
    console.log(year,"Is a Leap Year");
}
else 
{
    console.log(year," is a  Not Leap");
}
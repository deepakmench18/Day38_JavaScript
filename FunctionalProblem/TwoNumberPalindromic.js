function Palindrom(n)
{
var temp = 0;
var digit = 0
var rev = 0;
temp = n;
while(n>0)
{
    digit= n%10;
    rev=rev*10+ digit;
    n=parseInt(n/10);
}
if(rev == temp)
{
    console.log("Number is Palindrome");
}
else
{
    console.log("Number is Not Palindrome");
}
}

const prompt = require("prompt-sync")();
var n = prompt("Enter First Number");
Palindrom(n);
var n = prompt("Enter Second Number");
Palindrom(n);
function checkPalindrom(n)
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
    console.log("Number is Prime and  Palindrome");
}
else
{
    console.log("And Not Palindrome");
}
}
function checkprime(n)
{
    var count = 0;
    for(var i =2;i<n;i++)
    {
        if(n%i==0)
        {
            count = 1;
        }
    }
    if(count==0)
    {
        console.log("Number is Prime");
        checkPalindrom(n);
    }
}
const prompt = require("prompt-sync")();
var n = prompt("Enter Number");
checkprime(n);

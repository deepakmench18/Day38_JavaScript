var n = 121;
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
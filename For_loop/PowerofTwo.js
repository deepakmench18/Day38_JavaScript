var i = 1;
var j=1;
var n =10;
while(i<n)
{
    var sum=2;
    for(j=1;j<i;j++)
    {
        sum=sum*2;
    }
    if(sum<257)
    {
        console.log("for 2 power of ",i,"=",sum);
    }
    i=i+1;
}
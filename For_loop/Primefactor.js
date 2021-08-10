var x = Math.floor(Math.random()*200);
var fact = 1;
console.log(x);
for(var i = 2;i<=x;i++)
{    
    if(x%i==0)
    {
        var count = 0;
        for(var j=2;j<=i/2;j++)
        {
            if(i%j==0)
            {
                count =1;
            }
        }
        if(count == 0)
            {
                console.log(i);
                fact = fact *i;
            }
    }
}

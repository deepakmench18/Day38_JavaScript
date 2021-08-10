var goal=200;
var cash=100;
var bet=30;
var gambler=0;
while((cash<goal) && (cash>bet))
{
     gambler=Math.floor(Math.random()*2);
    if(gambler==1)
    {
        cash=(cash+(bet*2));
    }
    else
    {
        cash=(cash-(bet*2));
    }
}
if(cash>goal)
{
    console.log("Player Won");
}
else
{
    console.log("Player Loose");
}
var head =0;
var Tail=0;
var i =1;
while(i>0)
{
    var x = Math.floor(Math.random()*2);
    if(x==1)
    {
        head = head+1;
    }
    else{
        Tail=Tail+1;
    }
    if(head==11)
    {
        console.log("Head is Win");
        break;
    }
    else if(Tail==11)
    {
        console.log("Tail is Win");
        break;
    }
    i=i+1;
}
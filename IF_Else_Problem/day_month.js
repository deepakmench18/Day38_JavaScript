var d = Math.floor(Math.random()*30 + 1);
console.log(d);
var m = Math.floor(Math.random()*6);
console.log(m);
if((d>20) && (d<31) && (m>3) && (m!=0) || (d<20) && (d!=0)&& (m<6))
{
    console.log(true);
}
else{
    console.log(false);
}
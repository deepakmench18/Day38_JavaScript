//var select = Math.floor(Math.random()*3);
var select = 1;
switch (select)
{
    case 0:
        console.log("Feet to Inch");
        x = 20;
        inch = x*12;
        console.log(inch,"inch");
        break;
    case 1:
        console.log("Inch to Feet");
        x = 20;
        ft = x/12;
        console.log(ft,"feet");
        break;
    case 2:
        console.log("Feet to Meter");
        x=20;
        meter = x/3.281;
        console.log(meter,"meter");
        break;
    case 3:
        console.log("Meter to Feet");
        x=20;
        ft=x*3.281;
        console.log(ft,"Feet");
        break;
    default:
        console.log("Check correct option");
}
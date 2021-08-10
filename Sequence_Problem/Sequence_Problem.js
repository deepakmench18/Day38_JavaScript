var x = Math.floor(Math.random()*10);
//console.log(x);

var y = Math.floor(Math.random()*6);
//console.log(y);

var Dice = x+y;
//console.log(Dice); 
//5 Random 2 digit values
var a = Math.floor(Math.random()*90 + 10);
var b = Math.floor(Math.random()*90 + 10);
var c = Math.floor(Math.random()*90 + 10);
var d = Math.floor(Math.random()*90 + 10);
var e = Math.floor(Math.random()*90 + 10);
var sum = a+b+c+d+e;
console.log(sum);
var avg = sum / 5;
console.log(avg);

//Unit Conversion
//Ft to inch
var inch = 12;
var ft = 42 / inch;
console.log(ft,"Ft") ;
//Feet to meter
var meter = 240 / 3.281;
console.log(meter);
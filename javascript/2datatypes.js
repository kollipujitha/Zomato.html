// true=1
// false=0

c=true+true;
console.log(c);

g=true+false;
console.log(g);

j=true-true;
console.log(j);

k=true-false;
console.log(k);

s=true*false;
console.log(s);

var y="puji"+true;
console.log(y);//pujitrue

i="true"-"true";
console.log(i);//NaN

// typecasting- converting one datatype to another
var t="78.67"
var j="40.90"

var h=t+j;
console.log(h);//78.6740.90

l=parseInt(t)+parseInt(j);
console.log(l)//118
m=parseFloat(t)+parseFloat(j);
console.log(m);//119.57

//es6(use number instead of parse)
var t="78.67"
var j="40.90"

var n=+t + +j;
console.log(n);//119.57

l=Number(t)+Number(j);
console.log(l)//119.57

//if the first characters are numbers in a string they can be converted as int and number after string is converted as int using parseInt
var e="768music";
var t="music768";
var o="768music768";

console.log(parseInt(e));//768
console.log(parseInt(t));//NaN
console.log(parseInt(o));//768

//even if 1st characters are numbers in a string they can not be converted as integer when we use number type
console.log(Number(e));//NaN
console.log(Number(t));//NaN
console.log(Number(o));//NaN
//                        Concept--String literals or Template literals
// "An Avengers is an action movie with 4.5 rating in hollywood"

var moviename="Avengers";
var type="action";
var category="hollywood";
var rating="4.5";

// In es5
var es5output=" An "+moviename+" is an "+type+" movie with "+rating+" rating in "+category;
console.log(es5output);

//in es6
//"`" => back tick 
//"$" => interpolation-means substitute the value

var es6output=`An ${moviename} is an ${type} movie with ${rating} rating in ${category}`;
console.log(es6output);




//             If-else checking two conditions- syntax
//       if(condition)
//       {

//       }
//       else
//       {

//       }

//              If-elseif-else checking three conditions- syntax
//       if(condition)
//       {

//       }
//       else if(condition)
//       {

//       }
//       else
//       {

//       }

let a=10;
if(a%2==0){
    console.log(`Number ${a} is even`);
}
else{
    console.log(`Number ${a} is odd`);
}

let uname="jack";
if(uname=="jack"){
    console.log(`hi ${uname} you are admin `);
}
else if(uname=="joe"){
    console.log(`hi ${uname} you are super admin`);
}
else{
    console.log(`hi ${uname} you are not member`);
}

let name="soso";
let role="singer";
if(role=="singer"){
    if(name=="soso"){
        console.log(`hi ${name} you are the singer`);      
    }
    else{
        console.log(`hi ${name} you are not the singer`);
    }    
}


let fname="pujitha"
let grole="singer1"
if(grole=="singer"){
    if(fname=="Srinivas"){
        console.log(`hi ${fname} you are the singer`);      
    }
    else{
        console.log(`hi ${fname} you are not the singer`);
    }    
}
else {
    if(fname=="pujitha"){
    console.log(`hi ${fname} you are the dancer`);
    }
    else{
    console.log(`hi ${fname} you are not the member`);
    }
}

// ternary operator(shortcut for if else)
// syntax-- condition ? if condition is true: if condition is false

var m=6;
console.log(m > 6 ? "greater than" : "less than");
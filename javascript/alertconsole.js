// console.log = use to debug or To display output
// alert       = use to get Notification
// confirm     = use to check whether yes or No
// prompt      = use to take user input

//A dialogue box is displayed with the message given in the alert and a ok button
alert("form submitted");
alert("no slots available");

//A dialogue box is displayed with the message given in the confirm and a ok button and a cancel button
// ok-true
// cancel-false
p=confirm("Leave the website");
console.log(p);

//A text input box is displayed to type something plus a ok button and a cancel button
prompt("please enter your name");
console.log(prompt("Please enter your name"));

var firstName = prompt("Please enter your first name");
var lastName = prompt("Please enter your last name");

alert(firstName+lastName);//will give the output as alert message with ok button

d=prompt("Please enter your 1st number");
f=prompt("Please enter your 2nd number");
b=Number(d) + Number(f);// or we can use this also b=+d + +f;
y=alert(`the sum of 1st and 2nd numbers:${b}`);
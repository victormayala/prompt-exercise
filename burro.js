var firstName = prompt("what is your name?");
var lastName = prompt("what is your last name?");
var age = prompt("what is your age?");
function addtext(){
document.getElementById("out").innerHTML = "I see your name is " + firstName + ' ' + lastName + "<br>"
+ "and your age is " + age + "<br>"
+ "Thanks for sharing your information.";
//document.getElementById("out").innerHTML = "I also see that your age is " + age;
//document.getElementById("out").innerHTML = "Thanks";
};

addtext();

console.log("I see your name is " + firstName  + lastName);
console.log("I also see that your age is " + age);
console.log("Thanks!");
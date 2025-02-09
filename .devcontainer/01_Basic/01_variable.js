
const userId = 1234;
let firstName = "Gaurav";
let lastName = "Bhekare";
let emailId = "Gaurav.bhekare7@gmail.com";
var city ="Mumbai";
mobileNumber =8787765432;

// userId=5438; // assignment to constant variable not allowed in javascript 

console.log(userId);

console.table([userId,firstName,lastName,emailId,city,mobileNumber]);
console.log("after assignment to diffrent values");

firstName="Gaurav 1";
lastName = "Bhekare 1";
emailId="gaurav.bheakare@gmail.com";
city ="New Mumbai";
mobileNumber= 987655443;
let userToken;
console.table([userId,firstName,lastName,emailId,city,mobileNumber, userToken]);

/*
prefer not to use var as it not wokring with the scope it changes the value for the variable 
we decalre inside the scope and outside the scope as well 

*/
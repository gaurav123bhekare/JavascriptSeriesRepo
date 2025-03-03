console.log("String tutorials");

let firstName="Gaurav";
const repoCount = 30;

console.log(firstName + repoCount + "Value"); // simple concatination with + sign 

console.log(`My name is ${firstName.toUpperCase()} and my repocount is ${repoCount}`); // string concatenation with interpolation we can dynamically add the data 
// string concatenation we use most of the time for the dynamic variable or string change the value 

// variable name.method like uppercase() or lowercase we can add inside interpolation 


console.log("String declartion as two type");
const name = "Gaurav"; // simple way to decalre string 
const fullName = new String("Gaurav Bhekare"); // declare the string along with class and method init like prototype
console.log(name);
console.log(fullName.length); // we can get the lenth of the string in following way 
// 0:"G"
// 1:"a"
// 2:"u"
// 3:"r"
// 4:"a"
// 5: "v"
// 6: " "
// 7: "B"
// 8: "h"
// 9: "e"
// 10: "k"
// 11: "a"
// 12: "r"
// 13: "e"
// length: 14
// [[Prototype]]: String
// [[PrimitiveValue]]: "Gaurav Bhekare"
console.log(fullName.toUpperCase()); // accessing uppercase function 
console.log(fullName.toLowerCase());
console.log(fullName.charAt(3)); // at 3rd position with letter i.e r 
console.log(fullName.indexOf('B')); // 7 at 7th position B is there

const fullname1 = fullName.substring(0,5); // it will not contain negative values 
console.log(fullname1); // negative value conveted to 0 

const fullname2 = fullName.slice(1,3); // it contains negative value so it will reverse the slice
console.log(fullname2);












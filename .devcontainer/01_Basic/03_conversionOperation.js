let score = 50;

console.log(typeof score);
console.log(typeof(score));

let score1 = null;
let convertToNumber1 = Number(score1);
console.log(typeof convertToNumber1);
console.log(convertToNumber1);  // return 0 as null converting to the number type it returned as 0 


let score2 = "Gaurav";
let score3 = undefined;

let score4 = "55";
let convertToNumber = Number(score4);
console.log(typeof convertToNumber);
console.log(convertToNumber);



let convertToNumber2 = Number(score2);
console.log(typeof convertToNumber2);
console.log(convertToNumber2); // return NAN as we are converting string to number 


// "33" => 33
// "55r" => NAN
// null => 0
// undefined => NAN 
// true => 1; false => 0;


// Boolean Conversion 

let isLoggedIn = 1; 
let booleanToNumber = Boolean(isLoggedIn);
console.log(booleanToNumber);  // return true as we are converting 1 to boolean value

// 1=> true
// 0=> false 
//"" => false
// "gaurav" => true  i.e it returns string is not empty 

let number = 88;
let convertToString = String(number); // sytax to convert the value from any datatype to string 
console.log(convertToNumber); // converted value from string to number 
console.log(typeof convertToNumber); // return string as we converted number to string 

console.log("-----Operations -------");


// **************** Operations ***********************

console.log(1 + 1); // simple add number if datatype is same 
console.log("1" + 1); // return 11 as both consider string 
console.log(1 + "2"); // return 12 as both consider string 
console.log(1 + 1 + "3"); // return as 23 as first two consider as numerb and then string 
console.log("1" + 2+3); // 123 // consider all the values to be string 
console.log(true); // => true consider value as boolean 
console.log(+true); // => 1 as preceding increment to be 1 = 0+1 = 1
// console.log(true+); // not allowed give error
console.log(+""); // => 0 return as 0 as empty string return as 0 


console.log("********Prefix and postFix in Javascript***********");


console.log("Postfix Example as we add ++ increment to the variable");
let x = 3; // x value remain as 4 
const y = x++; // => y value will consider to be initial value 
console.log(`x:${x}, y:${y}`); 


console.log("prefix example as we add ++ before the variable value.");

let a = 3; // it incrementing value by 1 as it prefix before declareing =4
const b = ++a; 
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



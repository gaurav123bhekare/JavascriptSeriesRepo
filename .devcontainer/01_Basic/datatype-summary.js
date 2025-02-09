console.log("Datattype summary.");

// # premitive data type 
// 7 Types : String, Number, Boolean, Null. undefined, symbol 

let name = "Gaurav";
let age = 30;
let isConfirm = true;
let temp = null;
let userEmail; // if value is not assined it will conside as undefined 
console.log(typeof userEmail); // return undefined 
const id = Symbol('123'); // symbol is datatype 
const anotherId = Symbol('123'); // if we pass same value to both symbol its value will not same as its unique id 

console.log(id === anotherId); // return false 
console.log(typeof id); // return datatype as symbol
console.log(typeof anotherId);// return datatype as symbol
const bigNumber = 98765543n; // big int as it post n it will example of big int
console.log(typeof bigNumber); // if value contains n after number then it will return bigint or it will consider as number 





// # Reference Data Type (Non Premitive)
//  Array , Objects , Functions

// example of array 
const fruits = ["Moango", "Apple","Grapes","orange"]; 
console.log(typeof fruits); // return object as data type


// object which contains key value pair
let myObje ={
    name: "gaurav",
    Age:20,
    Mobile : 998877779
}
console.log(typeof fruits); // return object as data type
// function
const myfun = function(){
    console.log("HelloWorld");
}
console.log(typeof myfun); // return type as function 

// non premitive data type return type as object and for fucntion we call as fucntion object 

//Summary 
// Type Of Value => Data type
//undefined => "undefined"
// Null => "Object"
// Boolean => "boolean"
// number => number 
// string => string 
// function => function 
// symbol => symbol 

//JavaScript is a dynamic language. This means that the type of a variable is assigned at runtime, 
// based on the value of the variable. 


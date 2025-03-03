
//array 

// declaring array 
const arr = [0,1,2,3,4,5,6];
const fruits =["mango","Orange","Grapes","Banana"];

// declaring array in diffrent way 
const myarr2 = new Array(1,2,3,4,5,6,7); // which returns array with property when we can able to see in console 

// methods in array 
console.log(arr);
arr.push(7); // added number 7 in aaray at the end 

console.log(arr);

arr.pop(7); // remove 7 number from array
console.log(arr);

arr.pop(8);
console.log(arr);

arr.unshift(9); // add 9 number in first position --- shift first 
console.log(arr);

arr.shift(); // it will remove starting number(number posiition at 0 ) from array 
console.log(arr);

console.log(arr.includes(7)); // return true if exists and false if not 
console.log(arr.indexOf(3)); // return index of the array number if 
// present in the array and return -1 is not exists 

const newarr= arr.join(); // convert the arra in string formate 
console.log(arr);
console.log(newarr); // if we check typeof for the new array it will return string 
// o/p is 0,1,2,3,4,5

// slice and splice 
console.log("*********Slice and SPLICE************");
console.log("A=",arr);

const arrnew = arr.slice(1,3); // slice(startNumber, EndNumber)
// start with 1 and end with 3 means not include 3 -- start and end will not inclued 
console.log(arrnew);

const arrnew1 = arr.slice(2,5);
console.log(arrnew1); // it includ start number and exclude end number 
// o/p :- [2,3,4]


console.log("------Splice-------------");
console.log("B1",arr);
const arrnew2 = arr.splice(1,3);
// after splice it will remove range portion from the original array 
console.log("B",arr);
console.log(arrnew2);

// splic is manipulating original array 
// slice is not manipulating original array 












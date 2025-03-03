
// push one array into another 

const arrA = ["a","B",'c','d'];
const arrB = ['e','f'];
arrA.push(arrB); // [ 'a', 'B', 'c', 'd', [ 'e', 'f' ] ] 
// it will push one array into original array 
console.log(arrA);

// concatenate 
const arrD = ['g','h'];
const arrC= arrB.concat(arrD);
console.log(arrC); // [ 'e', 'f', 'g', 'h' ]
// it will simply element of both the array inside one array 

// spread oprator => it will work like concatenate 
const arrE = [...arrD,...arrB] ;
console.log(arrE); // spread operator and concatenate work same only syntax chnage 

// flat function 
const arrayComplex = [1,2,3,4,[4,5,6],7,[8,[1,2,[4,10,11]]]];
const array_simple = arrayComplex.flat(Infinity); // infinity can be replaced with level number 
// which the complex array is there 
console.log(array_simple); // int this case it will retun all the sub array element in parent array 
// including ducplicate value 

// isArray
console.log(Array.isArray("Gaurav")); // return given value is array or not 
// reutrn true or false 

/// array.from => it will convert value of string or object into array 
console.log(Array.from("Gaurav")); // [ 'G', 'a', 'u', 'r', 'a', 'v' ]

console.log(Array.from({name:"Gaurav"})); // return []


// convert diffrent strings or number variable into one array 
let a=100;
let b =200;
let c=300;

console.log(Array.of(a,b,c)); //[ 100, 200, 300 ]




 


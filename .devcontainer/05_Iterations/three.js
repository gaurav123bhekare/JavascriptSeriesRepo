// high order array loop 

// for of loop 
// array specific loop 

// ["","","",""] // array with string 
// [{},{},{},{},] // arrya with object 

let myArray = ["a","b","c","d","e","f"];

// example of forof loop 
for (const element of myArray) {
    console.log(`array Value :- ${element}`);    
}


// using forof loop print the all the character inside the one string 
const str ="Hello Gaurav";
for (const strval of str) {
    console.log(`Each Char value is ${strval}`);
}

// maps => iteration value set in array 
// map is object of key value pair we can use key or value 

const map = new Map();
map.set('IN','India'); // we are adding the value for the boject with key and value 
map.set('USA','United State Of India');
map.set('Fr','France');

console.log(map); // outpit as below 

// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United State Of India',
//     'Fr' => 'France'
//   }

for (const [key,value] of map) { // which takes key and value pair
    console.log(key + ':-'+ value);
}

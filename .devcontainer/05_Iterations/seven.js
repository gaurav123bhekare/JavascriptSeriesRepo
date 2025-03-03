// add one number into array list 
// using map 

const numArray = [1,2,3,4,5,6,7,8,9,10];

const newCalculateValue = numArray.map((num)=> num +10);
console.log(newCalculateValue); // it will add the [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

// if we  need to modify the array list num we can use the map which maping with each and every 
// data 

// Chaining in javascript 
// we can use multiple method on one array is called chainning 
// like arr.map().map().filter()

// we can achive with the multiple map and the filter function on the array 

const newNumVal = numArray
                   .map((num)=> num * 10 )  // first it will execute this step chain 1
                   .map((a)=> a + 1) // output of chain 1 then this is chain 2
                   .filter( (num) => num >=50 ) // output of chain 2 then chain 3

console.log(newNumVal); // [ 51, 61, 71, 81, 91, 101 ]

                   

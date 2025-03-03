
// while loop in javascript 


let index = 0; 
while (index <=10) {
    console.log(`The Value is ${index}`);
    index = index + 2;    
}

let myArray = ["a","b","c","d","e","f"];
let n = 0;
while (n <= myArray.length) {
    if(myArray[n] != undefined)
    {
    console.log(`Array Value is ${myArray[n]}`);
    }
    n = n+1;    
}

// do while loop 

let score = 0;

do {
    console.log(`Score Value is ${score}`);
    score = score +2;  // any increment or decrement 
    
} while (score <=10);

let score_1 = 11;

do {
    console.log(`Score Value 1 is ${score_1}`); // it will print the value is 11 because it will execute the first and check the condition later 
    score_1 = score_1 +2;  // any increment or decrement 
    
} while (score_1 <=10); 
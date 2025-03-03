// for loop 
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
}

// nested for loop 

for (let i = 0; i < 5; i++) {
    const elementi = i;
    console.log(`Outer Loop ${elementi}`);

    for (let j = 0; j < 5; j++) {
        const elementj = j;
        console.log(`Inner Loop ${j} and outer loop ${i}`);
    }
}

// o/p outer loop run 1 time 
// inner loop run multiple time along with outer loop 

// table for 5 using nested loop 

for (let i = 1; i <=10; i++) {
    for (let j = 1; j <= 10; j++) {
        // add the multiplication inside the loop 
        console.log(`${i} * ${j} = ${i*j}`);   
    }    
}

// pring table fo 5 
let n = 5; 
console.log("Table of 5");

for (let i = 0; i <=10; i++) {
    
    console.log(`${i} * ${n} = ${i*n}`);
    
    
}
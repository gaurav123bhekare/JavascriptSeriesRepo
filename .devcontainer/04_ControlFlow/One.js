
if (2 == "2") {
    console.log("Executed");    
}

//strict comparision operator 
if(3 === "3") // this condition will not work as it is comparing datatype and the value 
{
    console.log("Comparision strict is done");
}else{ console.log("Else Part");
}

// false values  
// false , 0 , BigInt On, "", null , NaN , undefined, 
var a = NaN;
if (a) {
    console.log("true value");    
}
else{console.log("false value");
}

// truthly value 

// "0", 'false'," ",[] , {}, function(){}
if('false')
{
    console.log("this will return true value if we enclose in single quote");    
}
if('0')
{
    console.log("this will return true value if we enclose in single quote");    
}

// checking empty object using if condition 
const emptyObj = {};

if(Object.keys(emptyObj).length === 0)  // checking object keys are present or not 
{
console.log("object is Empty");
}


console.log(false ==0); // return true 
console.log(false == ''); //true
console.log(0 == ''); // true 

// nullish coalescing operator (??) : null undefined

let val1; 
val1 = 5 ?? 10; // return value 5 if first value is not null then it will return first value 
val1 = null ?? 20; // it will return 20 as first value is null 
val1 = undefined ?? 23 ;  // return value 23 as it check null and undefined 
val1 = null ?? 10 ?? 20; // it will return value 10 as after null itsa valu is 10 

val1 = null ?? null; // here it return null as both the value are null 

console.log(val1);

// Terniary operator 
// condition ? true: false;

const price = 100;

price >= 80 ? console.log("Price Less than 80 ") : console.log("price greater than 80");
;





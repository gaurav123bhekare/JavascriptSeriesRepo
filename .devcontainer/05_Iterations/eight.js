// Javascript Reduduce 

const numArry = [1,2,3,4];

const initialValue = 0; // this value we use for o run the fisrt time of loop using reduce function
const sumWithInitial = numArry.reduce(
    (accumulator, CurrentValue) => accumulator + CurrentValue ,
    initialValue
);

// syntax 
// REduce using simple function 
const myTotal = numArry.reduce( function (acc,currVal){
    console.log(`Accumulator is ${acc} and CurrentValue is ${currVal}`);    
    return acc + currVal;  // when we use {} we need to return the object 
},0); // here we pass the 0 value to the function to strt the loop its called initial value 

console.log(myTotal); // 10  sum of all the value from the array 

// logic  
 // initially 
 // inital value = 0 
 // acc = initial value + curretn value = 0+1
 // 2:- acc = (sum from the previous step) + currentValue

// inital value we can use only 1st time 

const shoppinCart = [
    {
        itemName:"Js",
        price :2999
    },
    {
        itemName:"React Js",
        price :11000
    },
    {
        itemName:"Angular",
        price : 18000
    }
]

const myTotalShoppingCart = shoppinCart.reduce(function (acc, currentValue){

    return acc +currentValue.price; // where current value act as item inside the array

}, 0); // inital value

console.log(myTotalShoppingCart);

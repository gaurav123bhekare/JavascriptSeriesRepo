// object decalration 
// singleton  => only one instance object is create

// decalring symbol const 
const mySym = Symbol("Key1");

// object literals 
const userInfo ={
    name:"Gaurav",
    "Full Name" :"Gaurav B",
    [mySym] :"key12", // decalring symbol variable in array 
    age:20,
    location :"Mumbai",
    email:"gaurav@gmail.com",
    isLoggedIn :false,
    LastLoginDays :["M","T","W"]
}

// accessing object email values form the object in two diffrent ways 
console.log(userInfo.email);
console.log(userInfo["email"]);
console.log(userInfo["Full Name"]);

console.log(userInfo[mySym]); // reading value for the symbol 
console.log(typeof userInfo[mySym]); // with square bracket it will return in the object 
console.log(userInfo); // //   [Symbol(Key1)]: 'key12'

userInfo.email ="gaurav.bhekare@gmail.com";
userInfo["location"] ="Pune"; // update value 
console.log(userInfo);
//freeze

// Object.freeze(userInfo);
// userInfo.email="Gaurav@asdf.com";
// console.log(userInfo);

userInfo.greeting = function(){
    console.log("this is Function One");
}
userInfo.greetingTwo = function(){
    console.log(`Hello Good Morning ${this["Full Name"]}`); // to access value from same object we use this
    
}

console.log(userInfo.greeting());

console.log(userInfo.greetingTwo());





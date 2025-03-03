// functions .js 

// function 

function loginUserName(username,lastName){

    // if(username === undefined) and (!lastName) both the conditions are same only diffrence in syntacx
    if(!lastName)
    {
        console.log("please enter Last Name");
        return;
    }
    if(username === undefined)
    {
        console.log("please enter your name");
        return;
    }
   return `${username} just logged in`;
}

console.log(loginUserName("Gaurav"));

function helloUser(username = "sam"){
    if (!username) { // this block will not execute as we passed the default value to function 
        console.log("Please enter username");
        return;
    }
    return `Hello ${username}`;
}
console.log(helloUser()); // if we pass the empty value by defualt it will retun default value
console.log(helloUser("Sanjana"));


// pass multiple value to the function

function calculateCartPrice(...num1) { // rest operator or separator in array object 
    return num1;
}
console.log(calculateCartPrice(20,30,40)); // [ 20, 30, 40 ] it will return multiple value with array 

function getvalues(val1,val2, ...num){ // when we pass value parameter to initial start after the 
    // array it will consider the multiple object in array 
    return num;
}

console.log(getvalues(100,200,300,500,600)); // return [300,500,600]
// as 10 and 20 assigned to val1 and val2 

const user = {
    username : "Gaurav",
    price:199
}

function getObjectValue(obj) {
    console.log(` UserName is ${obj.username} and price is ${obj.price}`);
    
}
console.log(getObjectValue(user));





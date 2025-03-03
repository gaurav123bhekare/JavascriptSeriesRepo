let a = 300; // global scope
if (true) {
    let a = 10;
    const b = 20;
    var c=30;
    console.log("Inner Scope a value", a); // it will return  10 inner scope value
    
}
console.log("outer Scope a value", a); // it will return 300 global scope value 
// block scope => the scope of variable inside the function
// global scope => the scope of variable outside the function which can be used through out the page


// {} is called as scope
// console.log(a); // give error as a is not defined and not in scope
// console.log(b);// give error as b is not defined and not in scope
// console.log(c); // c value will print value which is wrong 


// nested function scope 
function one() {
    const username ="hitesh";
    function two() {
        const website= "google.com";
        console.log(username); // execute successfully as it is under scope 
    }
    console.log(website); // give error because value not in scope 
    two();   

}
one(); // step one to execute 

// output 
// it will first run one()
// then it will give error like website is not defined 
// two function will not work 

// if we comment log() for website 
// o/p is  execute two function inside the one fucntion 

console.log("***********Interesting example");

function addOne(num){
    return num +1 ;
};
addOne(5);

var addTwo = function(no){
    return no + 2;
}

addTwo(5); // function is declared and hold the value for the addtwo it will not defined in before funtiaon 

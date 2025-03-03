// IIFI function 
// Immediatly  invoked function expression (IIFE)

// (function (){ 
//     // Function Logic Here. 
//     })();

// sytax 
// () ()  first parentesis is function and second one is execution 

(function oneFun(){
    console.log("Function One log");    
})();

(()=>{
    console.log("Function Two Log");
    
})();

// we need to execute the function 
// output //  Function One log
// Function Two Log

// iife fucntion using input parameter 

((name)=> {
    console.log(`Hello ${name} Good Morning`);
    
})('Gaurav');

// output // Hello Gaurav Good Morning

var result = (function() {
    var x = 10;
    var y = 20;
    return x + y;
})(); 

// output function 
console.log(result);

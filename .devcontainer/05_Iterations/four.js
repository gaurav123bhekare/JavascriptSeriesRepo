const myObj ={
    js :"Javascript",
    cpp :"C ++",
    rb : "Ruby",
    ph :"Phython"
}

// forof is not working to iterate for object value 
// so we can use forin loop 

for (const key in myObj) {
    const strkey = key;
    const strKeyValue = myObj[key];
    // console.log(element);
    console.log(`My Object Key ${strkey} and Value is ${strKeyValue}`);
    
}

// 

let myArray = ["a","b","c","d","e","f"];

for (const key in myArray) {
    console.log(key); // for in loop use to iterat the value for array  like 0,1,2,3
    console.log(myArray[key]);
    
    
}
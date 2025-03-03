// reverse string using for loop with and without using inbuild function 


let str = "Javascript";
// console.log(str.length);

function ReverseString(str){
    let reverseString = "";
    for (let i = str.length-1; i>=0; i--) {
        // const element = [i];
        reverseString += str[i];
    }
    return reverseString;
}
console.log("Actual String:-", str);
console.log("Reverse String:-", ReverseString(str));

// reverse function using reverse method 

let s = "HelloWorld";
const newstr = str.split('').reverse().join(''); // reverse is not work without split and join method 
console.log(newstr);

const ans = s.split('').reverse().join('');
console.log(ans);



// reverse array withour using reverse function 
const originalArray = ['a', 'b', 'c', 'd', 'e', 'f'];
 var reverseArr = [];

function ReverseArr(arr){
    for (let i = arr.length-1; i >-1; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}
console.log("Originial Array:-" + originalArray);
console.log("Reverse Array:- " + ReverseArr(originalArray));

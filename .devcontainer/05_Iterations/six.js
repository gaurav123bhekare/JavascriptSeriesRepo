// 

const programming =["JS","C","Angular","React","C#"];
const numArray = [1,2,3,4,5,6,7,8,9,10];

// filter user in loops 

const newNums = numArray.filter((num)=> num >5);
console.log(newNums);

// diffrent way we can writ the filter  with arrow function 
/// if we open scope we need to use retun keyword
const newNums1 = numArray.filter((num)=> { 
    return num >5;
});
console.log(newNums1);

 // whenever we use filter we can always use where condition like one object 
 // when we use {} then we need to return the object value 




// current context 

const user ={
    userName: "Gaurav",
    price :999,

    welcomeUserMsg: function(){
        console.log(`${this.userName}, welcome to website`); // this we use for the value we need to access 
        // from the current context  or scope 
        // when you want to access the current context value we can use the arrow function 
        console.log(this); // which return current context shows the value of the current object 
        
    }
}

// run the function inside the object 
user.welcomeUserMsg();
user.userName ="Gaurav B";
user.welcomeUserMsg();

// normal function 
const UserInfo = function(){
    let userName ="Sanjay";
    console.log(this.userName);
}

// arrow function 
const UserInfo_Arrow = ()=> {  // only diffrence in function is replaced with () and => function
    let userName ="Sanjay";
    console.log(this.userName);
}

UserInfo(); // both return undefined 
UserInfo_Arrow(); // both return undefined  

// simple arrow function also know as arrow explicit fucntion
const AddTwoNumber =(num1,num2) =>{
    return num1+num2;
}
console.log(AddTwoNumber(1,2));

// implicit arrow function  only syntax is diffrent 
const AddTwoNumber_imp =(num1,num2) => num1+num2;

console.log(AddTwoNumber_imp(3,4)); // both work in same manner 

// arrow function with return type of object which we can add 
const object_Ret = () => ({username : "Varushka"});
console.log(object_Ret());

const myarr = [2,3,4,5,6,7,8,9];

myarr.array.forEach(element => {
    
});


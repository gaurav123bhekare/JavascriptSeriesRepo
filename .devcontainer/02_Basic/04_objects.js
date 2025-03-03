// objects example 
console.log("objects example.");

const user1 = new Object(); // object creationg sytax 
const user2 = {}; // creating object 

user2.id = 1234;
user2.name = "Gaurav";
user2.email = "gaurav@gmail.com";
user2.isLoggedIn = false;

console.log(user2); // return object with newly added value 

const user3 ={
    email:"user3@gmail.com",
    fullName : {
        firstName: "Gaurav",
        LastName: "Bhekare"
    },
    address: {
        location: "mumbai",
    }
}

// access object value like location and name we can get it from .operation 

console.log(user3.fullName?.firstName); // returns 3firstname "Gaurav"
// ? is added if value is not there then we can return null 

// concatenating two objects 

const obj1 = { 1: "a", 2:"b"};
const obj2 = { 3: "c", 4:"d"};

const obj3 = { obj1, obj2 }; // this will return value both the object value inside one object 
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// to resolve above problem we use following 

const obj4 = Object.assign({},obj1,obj2);
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// above output also we get it using spread oprator as follows 
const obj5 = {...obj2,...obj1};
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// get object key and object value from the object usign object.key and object.value

console.log(user2);
console.log(Object.keys(user2)); // we can get all keys of an object [ 'id', 'name', 'email', 'isLoggedIn' ]
console.log(Object.values(user2)); // will get all values for an object

console.log(user2.hasOwnProperty('isLoggedIn')); // retun true we can check if
//  object has specify property or not 

// get value from object 
const course ={
    courseName:"JS Tutorials",
    price :"999",
    courseInstructor : "Gaurav B",   
}
// to get the course instructor value from the objcet we can get it following way 
// 1. course.courseInstructor // common way 

const {courseInstructor} =course; // decalre one time and we can use the value at diffrent places 
console.log(courseInstructor); // it will return "Gaurav B"

const {courseInstructor : inst} = course; // destructing object with name alias 
console.log(inst); // Gaurav B

// Json object 
// json object is similar to object with no name 
// api Return Json Object 
// {
//     // "Key" : "Value"
//     id: 1234,
//   "name": "Gaurav",
//   "email": "gaurav@gmail.com",
//   "isLoggedIn": "false"
// }

// api returns with objests inside array 
// [
//     {},
//     {},
//     {}
// ]







// dates 
let mydate = new Date();
console.log(mydate); // normal date 2025-02-10T18:10:37.059Z
console.log(mydate.toString()); // Mon Feb 10 2025 18:10:37 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toLocaleDateString()); // 2/10/2025
console.log(mydate.toISOString()); 
console.log(mydate.toJSON());

let date1 = new Date(2024,1,7); // passing year month and date as month starts from 0 in jan so 1 = feb
console.log(date1.toDateString()); //Wed Feb 07 2024
let date2 = new Date("2024-01-7"); // if in formate it contains same month 
console.log(date2.toDateString());






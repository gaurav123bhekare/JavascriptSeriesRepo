// foreach loop 

const programming =["JS","C","Angular","React","C#"];

// array.forEach(element => {
    
// });

programming.forEach( function (item){
console.log(item);
});

// jS
// C
// Angular
// React
// C#

// foreach using arrow function 
programming.forEach( (item)=> {
console.log(item);

})

programming.forEach((item,index,arr)=> { // here foreach also contains definition for the item, index and full array list
    console.log(item,index,arr);
    
//     JS 0 [ 'JS', 'C', 'Angular', 'React', 'C#' ]
// C 1 [ 'JS', 'C', 'Angular', 'React', 'C#' ]
// Angular 2 [ 'JS', 'C', 'Angular', 'React', 'C#' ]
// React 3 [ 'JS', 'C', 'Angular', 'React', 'C#' ]
// C# 4 [ 'JS', 'C', 'Angular', 'React', 'C#' ]

});


const myObj1 = [
    {
        LanguageName:"Js",
        FileName:"JAVASctipt"
    },
    {
        LanguageName:" C",
        FileName:"C basic"
    },
    {
        LanguageName:"C#",
        FileName:"c# basic"
    }
]

myObj1.forEach((item)=>{
    console.log(item); // it will print whole oject 
    console.log(item.LanguageName); // one specific value
    
    
})


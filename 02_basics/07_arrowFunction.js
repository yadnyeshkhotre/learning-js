let family={
    father:"Pappa",
    familyHead:"mother",
    totalEarnings:30000,
    earnings:function(){
        console.log(`${this.totalEarnings}, is the total earning`)
        console.log(this)
    },
}

// console.log(family)
// family.earnings()

// console.log(this)


//this in function
function coffee(){
    let randomVar=55
    console.log(this.randomVar)
    console.log(this)
}
coffee()

//arrow function
const milk =()=>{
    let randomVar=55
    console.log(this.randomVar)
    console.log(this)
}
milk()

//In both the cases may it be arrow fun or normal fun we cannot use this keyword to access the values, in normal fun with the help of this we can see lot many methods of it


// const multiply=(a,b)=>{
//     return a*b
// }
// console.log(multiply(11,11))


const multiply=(a,b)=> ( a*b)
console.log(multiply(11,11))

//how to return object with arrow function
const obj={
    name:"yadnyesh",
     rollNo:36
}

let fun=()=>obj.name
console.log(fun())

const fun2=()=>({
    myName:"yadnyesh",
    mummyName:"jayshri"
})

console.log(fun2())




//IIFE ...global scope ke pollution se problem ho rahi thi issiliye humne IIFE use kiya (Immediately Invoked Function Expressions)
(function chai(){
    console.log("connected");
})()
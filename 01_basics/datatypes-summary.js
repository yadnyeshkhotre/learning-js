/*
based on kis tarah se data ko memory me rakha jata hain aur access kiya jata hain, iske basis par there are two types of data:
1.primitive(total=7)
2.non-primitive
*/

//Primitive: String, Number, Boolean, Null, Undefined, BigInt, Symbol

//Non-Primitive (reference)
//Array, Objects, Function

/*
If in any langauge we dont have to specifically mention the datatype of the variable, that language is know as dynamic which means we can change the value during runtime.
JavaScript is a dynamically typed language
*/


//symbols
const id=Symbol('124')
const anotherId=Symbol('124')

console.log(id===anotherId)

//BitInt
const bigNumber=234374757483447448378373838n
console.log(typeof bigNumber)

//array
let arr=["mange","banana","tomato"]
console.log(typeof arr); // Outputs: 'object'
console.log(Array.isArray(arr)); // Outputs: true


//object
let myObj={
    name:"yadnyesh",
    age:22,
    city:"Banglore"
}

console.log(typeof myObj)

//function
myname="yadnyesh"
const myFun=function(name){
    console.log("hello "+name)
}
myFun(myname)
console.log(typeof myFun)
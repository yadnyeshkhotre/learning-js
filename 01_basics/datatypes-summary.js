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
// const id=Symbol('124')
// const anotherId=Symbol('124')

// console.log(id===anotherId)

// //BitInt
// const bigNumber=234374757483447448378373838n
// console.log(typeof bigNumber)

// //array
// let arr=["mango","banana","tomato"]
// console.log(typeof arr); // Outputs: 'object'
// console.log(Array.isArray(arr)); // Outputs: true


// //object
// let myObj={
//     name:"yadnyesh",
//     age:22,
//     city:"Banglore"
// }

// console.log(typeof myObj)

// //function
// myname="yadnyesh"
// const myFun=function(name){
//     console.log("hello "+name)
// }
// myFun(myname)
// console.log(typeof myFun)


//******************************************************************************************** *//
//Memory (Stack and Heap)

//Stack(Primitive), Heap(Non-Primitive)
// let myChildhoodName="yadu"
// let originalName="yadnyesh"

// // console.log(myChildhoodName)
// // console.log(originalName)

// originalName=myChildhoodName
// // console.log(originalName)
// // console.log(myChildhoodName);

// let carCollection={
//     Mahendra:["xuv700","scorpio"],
//     Tata:["hariar","safari"]
// }

// let newCarCollection=carCollection

// // console.log(carCollection.Tata[1])
// // console.log(newCarCollection.Tata[1])

// newCarCollection.Tata[1]="Neon"
// console.log(newCarCollection.Tata[1])
// console.log(carCollection.Tata[1])

//  let myName="yadnyesh"
//  console.log(myName.charAt(3))
//  console.log(myName.indexOf('z'))
//  console.log(myName.substring(3,5))//make a note that we cannot pass negative index in substring arguments
//  console.log(myName.slice(-4,4))

// const newString="    yadnyesh     "
// const cleanString=newString.trim()
// console.log(cleanString)
// console.log(newString)


// const url="https://yadnyesh.com/hitesh choudhary"
// console.log(url.replace(" ","_"))
// console.log(url.includes("yadnyesh"))

let myFullName="Yadnyesh Devidas Khotre"
console.log(myFullName.split(" "))
const myFullNameArr=myFullName.split(" ")
console.log(myFullName)

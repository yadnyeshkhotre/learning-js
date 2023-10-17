//If u wanna master js, just master objects and events, you are almost done with.
//objects can be diclear with two ways.:1. literals 2. constructors
//whenever we make an object by constructor, singleton is made

//object literals
const jsUser={
    name:"yadnyesh",
    age:21,
    location:"Navi Mumbai",
    email:"yadnyesh.khotre22@it.sce.edu.in",
    isLoggedIn:true,
    lastLogin:["Monday","Tuesday"]
}

// console.log(jsUser.lastLogin[0])//not good way to access the object values
// console.log(jsUser["email"])//right way


//why we should use [] in keys to access the values of the objects?
const myObj={
    "full name":"yadnyesh",
    age:22,
    "isMarried":false
}

// console.log(myObj["full name"])
// console.log(myObj.isMarried)





//Interview question: define symbol in obj and print it.
// let sym=Symbol("yadnyesh_ka_Symbol")
// const myObj2={
//     [sym]:"yadnyesh_ka_Symbol_from_object"
// }

// console.log(typeof myObj2["sym"])

const syma = Symbol("foo");
// console.log(typeof syma)
const obj = { [syma]: "yadnyesh" };

// console.log(obj); // 1
// console.log(typeof obj[syma]); // still 1



//how to change the values of obj
const newObj={
    class:5,
    sub:"science",
    isPassed:true
}

newObj.class=3
// console.log(newObj)

//how to freeze an object
// Object.freeze(newObj)
newObj.sub="maths"
// console.log(newObj)

newObj.greeting=function(){
    console.log("hello js user")
}

console.log(newObj.greeting)
console.log(newObj.greeting())

newObj.greetingtwo=function(){
    console.log(`Hello js user, ${this.sub}`)
}

console.log(newObj.greetingtwo())
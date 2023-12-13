//arrowFunctions
//this
//functions:
// function greetings(name) {
//     return "Hey "+ name+ " Good Morning";
// }
// console.log(greetings("yadnyesh"))

//arrow function
// const newFunction=(name) =>{
//     console.log(name)
// }

// newFunction("yadneysh");

// const addition = (a,b) => {
//     return a + b;
// }

// const sum = addition(10, 20);
// console.log(sum);

//one argument:
// const bookCounter = bookPrice =>  bookPrice + 7

// const newBookPRice = bookCounter(350);

// console.log(newBookPRice)

//arrow function:
// const arrFun = (favLang,favCar) => {
//     const name = "yadnyesh";
//     const dob = [17, 9, 2001]
//     console.log(name, dob);
//     console.log(favLang)
//     console.log(favCar[2])
//     return name;
    
// }

// arrFun("javascript",['range rover','wagenor','verna']);

// ***********************************************************************************
//this keyword
// const person = {
//     firstName: 'karan',
//     lastName: 'rananaware',
//     id: 120,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// console.log(person.fullName())

// const bookStore = {
//     noOfBooks: 10000,
//     address: "sector 12",
//     employees: 12,
//     bookNames: ['Hellen keller', "Never I have Ever", "MoneyPower"],
//     callBook: function () {
//         console.log(this)
//     }
    
// }

// bookStore.callBook();

// console.log(this)

// const newFun=()=> {
//     const name="yadnyesh"
    
// }

// newFun();
// "use strict"
// function myFun() {
//     return this
// }

// myFun()

// let x = this;


//IIFE
// Immediately Invoked Function Expression

(() => { 
    console.log("Welcome to the js series");
})();


// function Greet() {
//     console.log("Welcome to the js series");
// }()
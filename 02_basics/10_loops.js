//Loop
//for/while//do while
//javascript for loops:


// for (expression1: expression2: expression3) {
//     //code
// }

// let i = 1;

// for ( ; ; ){
    
//     if (i >10) {
//         break
//     }
//     console.log(i);
//     i=i+2

// }


// for (let i = 1; i <= 10; i++) {
    
//     for (let j = 1;j <= 10; j++) {
        
//         console.log(i + "*" + j + "=" + i*j );
         
//     }

// }


// const newArr=["bukati","wagenor","innova","auto","thar"]

// for (let i = 0; i < newArr.length; i++){

//     if (newArr[i] == "auto") {
//         console.log(i)      //
//     }
//     // console.log(`my car no ${i+1} is ${newArr[i]}`)
// }

// console.log(i)


//while loop
//while(codition){
    // code/logic
// }

// let i=0
// while (2 != 3 && i<=5) {
//     console.log("not equal")
//     i++

// }

// let age = 17

// while (age != 18) {

//     console.log("i cannot vote")
//     // age++
// }

// tummy = ["empty", "half full", "full"]
// let i=0

// do {
//     console.log("khana khate raho")
//     i++

// }while(tummy[i]!="full")


// i = 0;
// do {
//     console.log("keep leveling up")
//     i++
// }while(i<5)

// let langauge = "javascript"

// for (let eachWord of langauge) {
//     console.log(eachWord)
    
// }


// const arr = ["BMW", "Kawasaki", "hurekan", "Ninja"]

// for (let eachCar of arr) {
//     console.log(eachCar)
// }

// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:


// const student = {
//     name: "saurav",
//     age: 19
// }


// for (let [key,value]  of Object.entries(student)) {
//     console.log("key is:"+key,"value is :"+value)
// }

//map

// const student = {
//     name: "tanvi",
//     class: 2,
//     age:19
// }

// console.log(student)

//map
// const student = new Map()

// student.set('name', 'saurav')
// student.set('age', 19)
// student.set('class', 2)
// student.set('class', 2)
// // console.log(student.delete('name'))
// console.log(student)

// for (let [key,value] of student) {
//     console.log(key,value)
// }


//for in loop

// const obj = {
//     name: "yadnyesh",
//     rollNo: 33,
//     class:3
// }

// for (let key in obj) {
//     // console.log(obj[key])
// }

// const arr = ["name", "class", "roolNo"]

// for (const val in arr) {
//    console.log(arr[val])
// }

// const student = new Map();

// student.set('name', 'Yadnyesh');
// student.set('class', '3')
// student.set('rollNo', 33)

// // console.log(student)

// for (const val in student) {
//     console.log(val)
// }


// const obj = {
//     name: "yadnyesh",
//     1: 3,
//     rollNo: 33,
//     name: "jdjsl"
// }

// console.log(obj)

// const map = new Map();
// map.set(1, 'yadnyesh')
// map.set('class', 3);
// map.set('rollNo', 33);
// map.set('rollNo', 22);


// for (const [key,val] of map) {
//     console.log(key,val)
// }

// console.log( map)

// const obj = {
//     name: "yadnyesh",
//     rollNo: 33,
//     class: 3,
// }

// for (let [key, value] of Object.entries(obj)) {
//     console.log(key,":", value)
// }

// const arr = ["yadnyesh", "yadnysh", "yad"]

// // for (const key in arr) {
// //     console.log(arr[key])
// // }

// const obj = {
//     name: "yadnyesh",
//     rollNo: 33,
//     class:2
// }

// for (const key in obj) {
//     console.log(key)
// }

// const arr = ["yadnyesh", "yadnysh", "yad"]

// arr.forEach(printName)
    

// function printName(name) {
//     console.log(name)
// }


// const jsStudents = [
//     {
//         std: "abhishek",
//         rollNo: 1,
//         class:2
//     },
//     {
//         std: "tanvi",
//         rollNo: 2,
//         class:2
//     },
//     {
//         std: "nikhil",
//         rollNo: 4,
//         class:2
//     },
//     {
//         std: "karan",
//         rollNo: 4,
//         class:2
//     },
// ]

// jsStudents.forEach(eachStudent => {
//     console.log(eachStudent.std,"rollNo is",eachStudent.rollNo)
// });

//for of
//for in
//forEach


//for of

// const student=["abhishek","tanvi","karan"]

// for (let i of student) {

//     if (i == "nikhil") {

//         console.log("yes, ", i, "is present in my student array")
        
//     } else {

//         console.log("no, nikhil is not present in my student array")
//     }
//     // console.log(i)
// }










// const collegeName = "Saraswati College of Engineering";

// for (let eachCharacterOfCollegeName of collegeName) {

//     console.log(eachCharacterOfCollegeName)
// }


//map
// const map = new Map();

// map.set(1, 'abhishek')

// map.set('student2', 'aishwarya')

// map.set('student3', 'pranav')

// map.set(1, 'abhishek')

// console.log(map)


// //object
// const student = {

//     1: "nikhil",

//     'rollNo': 22,

//     'class':2
// }

// console.log(student)

//map

// const student = new Map();

// student.set('student1', 'sourav')
// student.set('student2', 'vaibhav')
// student.set('student3', 'vihas')

// // console.log(student)

// for (let [eachStudent, studentName] of student) {
    
//     console.log(eachStudent, "name is", studentName)
    
// }'


// const obj = {
//     name: "yadnyesh",
//     rollNo: 22,
//     class:3
// }


// for (let [key,val] of Object.entries(obj)) {

//     console.log(key,"is",val)

// }








//for in


// const obj = {
//     name: "yadnyesh",
//     rollNo: 22,
//     class:3
// }



// for (let objDetail in obj) {

//     console.log(obj[objDetail])

// }

// console.log(obj['name'])


// const bikes = ["kawasaki", "BMW", "Yamaha ", "karizma", "ZMR", "Buttet/Royal Enfiled"]

// for (let eachBike in bikes) {

//     console.log(bikes[eachBike])

// }

// console.log(bikes[5])

// const movies = new Map();

// movies.set('Animal', 'Ranbeer Kapoor');
// movies.set('Shole', 'Abhitabh Bacchan');
// movies.set('3Idiots', 'AMir Khan');
// movies.set('Lagaan', 'amir khan');

// console.log(movies)

// for (let [key,val] in movies) {
//     console.log(key,val)
// }

// const str = "javascript"

// for (let eachchar in str) {

//     if (eachchar == str.length - 1) {

//         console.log(str[eachchar])
//     }

//     // console.log(str[eachchar])

// }

// console.log( str.length-1)


//forEach

//it will take a callback function as an input

// const books=["obstacle is the opportunity","power of sleep","conquer","never have i ever"]


// const bookFunction=(eachBook)=> {

//     console.log(eachBook)


// }
// books.forEach(bookFunction)




// const jsStudents = [
    
//     {
//         student: "abhishek",
//         age: 18,
//         class:2
//     },

//     {
//         student: "vihas",
//         age: 19,
//         class:2
//     },

//     {
//         student: "aishwarya",
//         age: 19,
//         class:2
//     },

//     {
//         student: "tanvi",
//         age: 18,
//         class:3
//     }

// ]


// jsStudents.forEach(function (eachStudent) {
//     console.log("student name is",eachStudent.student,"and student age is",eachStudent.age,"and student class is",eachStudent.class)
// })

// const fruits = ["papaya", "orange", "banana", "apple"]

// fruits.forEach(function (eachFruit,i,fruitsArr) { 
//     console.log(eachFruit,index,fruitsArr)
// })
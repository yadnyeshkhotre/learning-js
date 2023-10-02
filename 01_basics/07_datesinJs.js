//Dates
//note that date is an object in javascript

let myDate = new Date()
// console.log(typeof myDate)
// console.log(myDate) //2023-10-02T18:43:20.781Z
// console.log(myDate.toISOString())//2023-10-02T18:45:35.923Z
// console.log(myDate.toJSON())//2023-10-02T18:46:26.835Z
// console.log(myDate.toUTCString())//Mon, 02 Oct 2023 18:46:53 GMT
// console.log(myDate.toLocaleString())//3/10/2023, 12:18:26 am
// console.log(myDate.toDateString())//Tue Oct 03 2023

let myBirthDate = new Date(2001, 8, 17)
// console.log(myBirthDate.toDateString())
let createdDateTime = new Date(2023, 7, 3, 24, 26)
// console.log(createdDateTime.toLocaleString())
let yymmdd = new Date("2001-09-17")
// console.log(yymmdd.toLocaleString())
// console.log(yymmdd.toDateString())

let ddmmyy = new Date("09-17-2001")//India
// console.log(ddmmyy.toDateString())
// console.log(ddmmyy.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)//returns value in miliseconds

let newDummyDate = new Date()
// console.log(newDummyDate.getMonth()+1)
// console.log(newDummyDate.getDate())
let string = `I was born in the year ${myBirthDate.getYear()} and my birth month is ${myBirthDate.getMonth()+1}`
console.log(string)
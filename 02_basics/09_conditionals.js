//if(condition//true){
    //code/logic
// }

// const khanaKyayaKya = false;

// if ("2"===2) {
//     console.log("executed");
// }
// else {
//     console.log("the codition u proveded was false. therefore the code is not exectuded");
// }

// const accBalance = 250;

// if (accBalance == 250) console.log("acc me bhot paisa hain. acc me total :", accBalance, "paisa hain");

//if else

// const date = new Date();

// const currentHour=17

// // console.log(currentHour)

// if (currentHour < 12 && currentHour>0) {
    
//     console.log("good morning")

// } else if (currentHour < 17 && currentHour>=12) {
    
//     console.log("good afternoon")

// } else if ( currentHour >= 17 && currentHour<20) {
//     console.log("good evening")

// } else if (currentHour > 20 && currentHour < 24) {
    
//     console.log("good night")
// }
// else {
//     console.log("greetings")
// }

//nested ifelse:
// const courseName = "c++";
// const mentor = "yadnyesh"
// let chaiPrice = 5000

// if (courseName == "javascript") {
//     if (mentor == "yadnyesh") {
//         if (coursePrice <= 3000) {
//             console.log("lets buy the course!")
//         } else {
//             console.log("acutal price: ",coursePrice)
//         }
//     } else {
//         console.log("the montor name is :",mentor)
//     }
// } else {
//     console.log("dont buy the course!")
// }

// if ("coffee" == "chai") {

//     let coffeePrice = 20;

//     console.log(coffeePrice)

// } else {

//     var chaiPrice = 10;

//     console.log("not executed")

// }

// console.log(chaiPrice)
/////////////////////////////////////////////////Switch///////////////////////////////////////
// const date = new Date();
// const month = date.getMonth();

// console.log(month)


// switch (month) {
//     case 0:
//         console.log("jan")
//         break;
//     case 1:
//         console.log("feb ")
//         break;
//     case 6:
//         console.log("good evening ")
//         break;
//     case 11:    //10
//         console.log("december")
//         break;
//     default:
//         console.log("error")
//         break;
// }


// const isLoggedIn = true;

//truthy values and falsy values
//truthy values:
//true," ", "false" , [],{},function(){},
//falsy values: false, 0, BigINt 0n,NaN,-0,null, undefined



// const myName = 0n

// if (myName) {
//     console.log("truthy values");
// } else {
//     console.log("this is a falsy value ")
// }

//terniary operators:
// condition ? true : false

// const accBalance = 50;

// accBalance >= 100 ? console.log("yes my acc balace is greater than or equals 100") : console.log("acc balance is less than  100")


// 2 == 3 ? console.log("true") : console.log("false")

// let ice = "hot";

// ice == "hot" ? ice = "cold" : ice = "very cold"

// console.log(ice)


// NCO(nullish coaleseing operator : null and undefined)
// let accBalance;
// // console.log(accBalance)
// accBalance = 132 ?? undefined

// console.log(accBalance)

const num1=5
const num = Boolean(num1)
console.log(num)
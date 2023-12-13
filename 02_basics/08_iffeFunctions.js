//immediately ivoked function expression
// const addition = (a, b) => a + b;
// const add = addition(5, 6);
// console.log(add);

// (function tubelight() {
//     console.log("lighten up");
// })();

// (
//     function age(ageNo) {
//         console.log(`my age is ${ageNo}`);
//     }
// )(21);


// function library(totalBooks) {
//     console.log(`my total books are ${totalBooks}`);
// }(25000);

// const totalStudentsInTheClass = ((totalStudents) => {
//     console.log(`total students are ${totalStudents}`);
// })(46)


let a = 5;
let b = 6;

const multiplication = ((a, b) => {
    const x = a * b * 2;
    return x;

})(a, b);


(() => {
    console.log("I am an ananonymous function...");
})()

// terniary operator
//condition?true:false

// const khanaKhaya = false;

// khanaKhaya ? console.log ("soo jao ") : console.log ("khana kha lo")

2 == 3 ? console.log("yes") : console.log("no")

// if (0n) {
//     console.log("true")
// }
// else {
//     console.log("false")
// }

// const myObjj = {
//     myName:"yadnyesh"
// }

// if (Object.keys(myObjj) == 0) {
//     console.log("my objec is empty")
// } else {
//     console.log("myObj is not empty. It contains the following data:",myObjj)
// }



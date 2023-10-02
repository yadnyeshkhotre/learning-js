//array
const myArr = [1, 2, 3, 4, 5, "yadnyesh", 's']//collection of multiple items can be of differnet datatypes
//javascript ke jo aray hote hain wo resizeable hote hain

//two ways of declaring an array
const myArr1 = [1, 2, 3, 4, 5,]
const myArr3 = [1, 2, 3, 4, 5,]
const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr1, typeof myArr1)
// console.log(myArr2, typeof myArr2)
// console.log(myArr1 === myArr3)//false becaus there references are differnt
// console.log(myArr1 === myArr2)//faluse same logic the references are different
// console.log(JSON.stringify(myArr1) == JSON.stringify(myArr2))//true now here it checks the actual value.

/*

NOTE: When you use the equality operator (==) to compare two arrays in JavaScript, it checks if they refer to the exact same object in memory. If they are separate instances, even if they have the same values, the comparison will return false.

*/

//Array methods
newArr=new Array(1,2,3,4,5,6)

// newArr.push(10)
// newArr.pop()//removes the last element of the array

// console.log(newArr);

//converting an array into string directly
const newArr1 = newArr.join()
// console.log(newArr1, typeof newArr1)



//slice, splice
// console.log("a", newArr)

const myNewArr = newArr.slice(1, 3)
console.log(myNewArr)

const myNewArr2 = newArr.splice(1, 3)
console.log(myNewArr2)
console.log(newArr)
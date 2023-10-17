const super_heros=["shaktiman","Nagarjun","munna_michal"]
const marvel_heros=["thor","Ironman","Batman"]

//push
// super_heros.push(marvel_heros)
// console.log(super_heros)
//conclusion: push works on existing array, it adds the pushed array into the existing array in [] only. eg.[1,2,3,4,[5,6,7]]

//concat
const newArray=super_heros.concat(marvel_heros)
// console.log(newArray)
//conclusion: concat returns a new array and it merge the both arrays with single single element.

//spread operator
const newArray2=[...marvel_heros,...super_heros]
// console.log(newArray2)

//array ke andar wale array ko normal array me kaise laye
const hiddenArray=[1,2,3,[4,5],[6,7,[8,9,10]]]
// console.log(hiddenArray);
const unhideTheArray=hiddenArray.flat(3)
// console.log(unhideTheArray);


//isArray
let iAmNotArray="yadnyesh"
console.log(Array.isArray(iAmNotArray))
iAmNotArray=Array.from(iAmNotArray)//converts into array
console.log(Array.isArray(iAmNotArray))

const obj={
    name:"yadnyesh",
    rollNo:18
}
//from array
console.log(Array.from(obj))

let score1=100
let score2=200
let score3=300

//of array
console.log(Array.of(score1,score2,score3))

// function myFun(){
//     console.log("hello there");
// }

// function anotherFun(a,b){
//     return (`${a+b} is the addition of ${a} and ${b}`)
// }
// console.log(anotherFun(5,false))


function avgSalary(first,second,third){
    if(!third){
        return ("please enter third number")
        
    }
    return (first+second+third)/3
}
let averageSalary=avgSalary(30000,45000)
// console.log(averageSalary)




function newFun(name="yadnyesh"){
    console.log(name)
}
newFun("khotre")



//restOperator       here in this case it returns all the values in form of array
function monthlyElectricityBill(firstBill,...bills){
    return firstBill
}

console.log(monthlyElectricityBill(500,700,850))

// objects in function
let obj={
    myName:"yadnyeshKhotre",
    rollNo:36,
    class:3
}

function objFun(object){
    console.log(`My username is ${object.myName} and my roll no is ${object.rollNo}`)
}

objFun(obj)


//directly passing an object to the function

function directObjFun(obj){
    console.log(`username is ${obj.user} and password is ${obj.pass}`)
}


directObjFun({
    user:"yadnyesh",
    pafss:4353453434
})



//arrays in function
let arr=["sunder","dayaben","jethaji","bapuji","tapu"]

function tarakMehetaKaUltaChasma(array){
    console.log(`${array[2]} is the father of ${array[4]}, ${array[3]} is the father of ${array[2]}, ${array[0]} is the sala of ${array[2]} and ${array[1]} is the sister of ${array[0]} then tell who is ${array[1]} of ${array[2]}`)
}
tarakMehetaKaUltaChasma(arr)

//we can even pass the complete arr directly into the function

function passArrDir(...arr){
    console.log(arr[1])
}

passArrDir([0,1,2],["yadnyesh"])
// console.log(array2)
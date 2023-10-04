//conversion from string to number
let num1=5;
let num1String=Number(num1)
console.log(typeof (num1String))//this will give us the output as number datatype


let score="33abc"
let scoreInNumber=Number(score)
console.log(typeof(scoreInNumber)) //this will successfully get converted into number
console.log(scoreInNumber)  //NaN
//so we can se that there are some problems with javascript thats why people prefer to use typescript as it is more secure.


//In case of null when we try to convert it into number then what is the datatype and value?
let nullVariable=null
let convertedNullVariable=Number(nullVariable)
console.log(typeof convertedNullVariable)
console.log(convertedNullVariable);
//Initilizing any variable (nullVariable in our case) with null in our case hold the value as null only and its datatype will be an object.(this is quite surprizing bucause the datatype should be null only but this behaviour is from starting.When you use typeof null, it returns 'object', but it's important to understand that null is not actually an object. This is considered a mistake or an inconsistency in the language. The ECMAScript specification, which defines JavaScript, mentions that the result of typeof null is 'object' due to a historical bug.)
//Note the point that when we convert the null variable(nullVariable), then after conversion into a number, the new variable(convertedNullVariable) will hold the value as 0 and its datatype will be changed to number.


//In case of undefined when we try to convert it into a number then what is the datatype and value?
let undefinedVariable=undefined
let convertedUndefinedVariable=Number(undefined)
console.log(typeof convertedUndefinedVariable)
console.log(convertedUndefinedVariable)
//So, in case of undefined initially when we define any variable with undefined (undefinedVariable), it holds the value as undefined only and its datatype is not an object but undefined only. And after converion into number its datatype becomes number and it holds the value as NaN


//converion from number  or string to boolean 
//1. Number conversion
let num=10
let convertedNumToBoolean=Boolean(num)
console.log(convertedNumToBoolean) // here we can conclude that may it be any number else than 0, it will be converted into true value after the conversion frm number to boolean.
//2. String conversion
let str=""
let convertedStrToBoolean=Boolean(str)
console.log(convertedStrToBoolean)// here if the string is empty and we try to convert it into boolean it will give me false value and if the string holds some value it wil return as true.



// ********************************Operations*************************************

// let value=3
// let negValue=-value
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/3)
// console.log(2%3)


// let str1="hello"
// let str2='yadnyesh'

// let str3=str1+str2
// console.log(str3)

// console.log(1+"2"+1)
// console.log(+true)
// console.log(+"")

// let num1,num2,num3
// num1=num2=num3=2+2
// console.table([num1,num2,num3])

// let gameCounter=100
// gameCounter++//101
// ++gameCounter//101
// console.log(gameCounter)

//prefix and postfix
// let x = 3;
// const y = x++;
// console.log(`x=${x}, y=${y}`);

// let a = 3;
// const b = ++a;
// console.log(`a=${a}, b=${b}`);




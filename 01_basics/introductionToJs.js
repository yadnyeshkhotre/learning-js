//nodejs and denojs were both created by Ryan Dahl. He initially developed nodejs and lateer went on to create denojs. nodejs is a popular js runtime that allows developers to run server-side javascript, while <denojs is a secure runtime >for js and typescript


//creating a new github directory and opening the project online on github codespace: create new repo-open codespace-vscode-view-command palette-container-1st opt-nodejs-showall-nodejs & js-18-OK.


//The range of safe integers in JavaScript is from -(2^53 - 1) to 2^53 - 1.


// Bug, inconsistency, problems in js
// 1. When you use typeof null, it returns 'object', but it's important to understand that null is not actually an object. This is considered a mistake or an inconsistency in the language. The ECMAScript specification, which defines JavaScript, mentions that the result of typeof null is 'object' due to a historical bug.

//2. let score="33abc"
// let scoreInNumber=Number(score)//if js was consistence then this step wont have compile only, it should not have converted.
// console.log(typeof(scoreInNumber)) //this will successfully get converted into number
// console.log(scoreInNumber)  //NaN
//so we can se that there are some problems with javascript thats why people prefer to use typescript as it is more secure.

//3. javascript allow different datatype variable comparision where as in case of typescript it strictly prohibits comparision between different datatypes variable.
//eg.
let strNum = "2"
let num = 1
console.log(strNum > num)//here js automatically converts or detects strNum as a number.


// null comparision wih zero
console.log(null >= 0)//true
console.log(null <= 0)//true
console.log(null==0)//false
console.log(null > 0)//false
console.log(null<0)//false
//  note:
//  The reason that nul==0 gives us false and null>=0 or null<=0 gives us true is because in case of comparision check(<= / >=) it    converts null to a number treating it as zero.
// javascript allow different datatype variable comparision where as in case of typescript it strictly prohibits comparision between different datatypes variable.


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


// strick check (===) strickly check the datatype as well
console.log("2"===3)
 

// undefined comparision wih zero
console.log(undefined >= 0)//false
console.log(undefined <= 0)//false
console.log(undefined==0)//false
console.log(undefined > 0)//false
console.log(undefined<0)//false
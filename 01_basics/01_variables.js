const accountId=22234
let accountMail="smilingyadnyesh001@gmail.com"
var name="yadnyesh"
accountCity = "Mumbai" 

// accountId=2               //Not allowed
// console.log(accountId);  //In the investigation we conclude that if we declare the variable with const keyword we wont be able to change the value of it further.


accountMail="yadnyeshkhotre22@it.sce.edu.in"
name="khotre"
accountCity="Navi Mumbai"
console.table([accountMail,name,accountCity])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

let newString;
console.log(newString); // abhi tak define nai kiya hain isiliye undefined.
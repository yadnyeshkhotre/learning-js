const facebook = new Object();//singleton object
const google = {};
// console.log(facebook,google);
google.headquators = 500
google.CEO = 'Sundar Pichai'
google.softwares = ["Alphabet", "Gmail", "Youtube"]
// console.log(google);


//object inside object
const obj = {
    village: "dewarda",
    "class": "2nd year",
    name: {
        firstName: "Yadnyesh",
        lastName:"Khotre"
    }
}
// console.log(obj.name["firstName"])
 


//combining two objects using spread operator
const obj1 = { 1: "one", 2: "two" }
const obj2 = { 3: "three", 4: "four" }
const obj3 = {...obj1, ...obj2 }
// console.log(obj3);

//another way to combine two objects is by Object.assign
const obj12 = { 1: "one", 2: "two" }
const obj13 = { 3: "three", 4: "four" }

const obj14 = Object.assign( obj12, obj13);
// console.log(obj14);
// console.log(obj12);
// console.log(obj14 === obj12);

//how to access the keys of an object.
//while accessing the keys of an object by Object.keys(), it returns an array of all the keys of the object
const newObject = {
    "myName": "Yadnyesh Khotre",
    "myMothersName": "Jayashri Khotre",
    age:21
}
keysArray = Object.keys(newObject);
// console.log(keysArray);
//similarly we can access the values also by Object.values(), and Object.entries()


const arrayObject = [
    {
    "myName": "Yadnyesh Khotre",
    "myMothersName": "Jayashri Khotre",
    age:21
    },
    {
    "myName": "Yadnyesh Khotre",
    "myMothersName": "Jayashri Khotre",
    age:21
    },
    {
    "myName": "Yadnyesh Khotre",
    "myMothersName": "Jayashri Khotre",
    age:21
    },
    {
    "myName": "Yadnyesh Khotre",
    "myMothersName": "Jayashri Khotre",
    age:21
    },
    {
    "myName": "Yadnyesh Khotre",
    "myMothersName": "Jayashri Khotre",
    age:21
},
{
    "myName": "Yadnyesh Khotre",
    "myMothersName": "Jayashri Khotre",
    age:21
}
]
// console.log(arrayObject[1].myName)

// console.log(arrayObject[1].hasOwnProperty("myFullName"))

const newObj2={
    ml:{
        dl:{
            cnn:"convolutional neural network"
        }
    }
}

console.log(newObj2.ml.dl.cnn);

const obj4={...newObj2}
// console.log(obj4)

const obj5=Object.assign({},newObj2,arrayObject)
// console.log(obj5)




const anObj={
    aim:"teaching",
    game:"gyming",
    main:"family",
    isMarried:true
}

console.log(anObj.hasOwnProperty('isMarried'))

//Object destructuring
const newObj={
    myName: "yadnyesh",
    address:"sector 12",
    class:"1st year",
    status:undefined

}

const {myName:name}=newObj
const {class:year}=newObj
console.log(year)

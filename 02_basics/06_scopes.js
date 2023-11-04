// let a=300
if (true){
    let a=10
    const b=20
    var c=30
}

// console.log(a);error
// console.log(b);error
// console.log(c);



var d=30
// console.log(d)
if(true){
    // console.log("inside",d)
}
// console.log("outside",d) //global values also get updated.



//nested function scope
function college(){
    
    const collegeName="Saraswati College of Engineering"
    
    function dept(){
        
        let totalDept=6
        
        console.log(`At ${collegeName}, we have in total ${totalDept} department`)
   
    }

    // console.log(totalDept)

    // dept()

}
// dept()

// college()

//scope in if loops
if(true){
  
    const house="myHouse"
   
    function houseDetails(){
     
        const totalFloors=2
     
        console.log(`My house name is ${house} and it has total ${totalFloors} floors`)
    
    }

    // console.log(totalFloors) //this will give me error cause totalFloors scope in within the houseDetails fun only.
}

// console.log(house) //this is will give me error cause the scope of house in within the if loop only

// houseDetails()   // this wont give me any error as such cause in case of if block, functions are hoisted to the outer scopoe.



//two different ways of declaring a function
//1st
hospitalBill([500,300,550])
function hospitalBill(day){

    totalBill=day[0]+day[1]+day[2]
    console.log(totalBill)

}



//2nd
jioPlans([100,149,299]) //in this case it will give me error cause of hoisting scope
const jioPlans=function jioPlans(plans){
    let bestPlan=plans[2]
    console.log(bestPlan) 
}



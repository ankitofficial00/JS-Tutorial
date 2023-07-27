// primitive 
// number, string,symbol,null,undefined,boolean,bigInt

let score=34;
let name="ankit";
let isLoggedIn=true;
let userValue;
const scoreFloat=23.78;
let outTemp=null;

let id=Symbol('34');
let anotherId=Symbol('34');
console.log(id===anotherId);

let bigNumber=478788899899n;

// non-primitive or refernce data types
// objects,array,functions etc.


const subjects=["maths","science","computer","gk","physiology","botanay"];

let studentDetails={
    name:"Ankit",
    age:22,
    marriedStatus:true,
    gender:"male",
};


let myName=function(){
    console.log("my name is ankit");
};

console.log(myName());


// console.log(typeof score,typeof name,typeof isLoggedIn,typeof userValue,typeof id,typeof scoreFloat,typeof outTemp);

// console.log(typeof myName,typeof studentDetails,typeof subjects);


// **************** Stack and Heap memory **********
// Stack(primitive) ---> copy ---> call by value 
// heap(non-primtive) ---> referenece(address)---> call by refernce 


let myFirstPhonePrice=23000;
console.log(myFirstPhonePrice);
let mySecondPhonePrice=myFirstPhonePrice;
mySecondPhonePrice=120000;
console.log(mySecondPhonePrice);

let userOne={
    name:'ankit',
    email:'ankit@google.com',
};

let userTwo=userOne;
userTwo.name="puneet";
console.log(userOne);
console.log(userTwo);



function sayMyName(){
    console.log("A");
    console.log("n");
    console.log("k");
    console.log("i");
    console.log("t");
};
// sayMyName();
// sayMyName();
// sayMyName();
// sayMyName();
// sayMyName();

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// };

function addTwoNumber(number1,number2){
    // return number1+number2;
    let result=number1+number2;
    return result;
};
const result=addTwoNumber(6,5);
// console.log(result);

function loginUserMessage(username="trun"){
    // if(username===undefined){
    //     console.log("plese enter the username");
    //     return
    // }
    if(!username){
        console.log("plese enter the username");
        return
    }
   return `${username} just logged in...`
}

console.log(loginUserMessage("hitesh"));

// function calaculateCartPrice(...num1){
//     let data=0;
//     for(let i=0;i<num1.length;i++)
//     {
//            data=num1[i]+data;
//     }
//     return data

// }
// console.log(calaculateCartPrice(10,20));
// console.log(calaculateCartPrice(100,200,300,400,500));


function calaculateCartPrice(va1,...num1){
return num1;
}
console.log(calaculateCartPrice(10,20));
console.log(calaculateCartPrice(100,200,300,400,500));

let JsUser={
    username:"ankit$23",
    prices:9999,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
};
// handleObject(JsUser);
handleObject({
    username:"ankit",
    price:99
})

const myNewArray=[10,20,30,40,50];

function printThirdValue(getarray){
    console.log(getarray[2]);
};
// printThirdValue(myNewArray);

printThirdValue([100,200,300,400,500]);
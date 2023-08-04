// if
// if (2 ==='2') {
//     console.log("exceuted");
// }
// console.log("if works if the condition is true only ");


console.log("exceuted");
const score=200;
if(score>100){
    const power="fly";
    console.log(`user power : ${power}`);
}
// console.log(`user power : ${power}`);

const balance=900;
if (balance<200) {
    console.log("less than 200");
} else if(balance<400) {
    console.log("less than 400");
}
else if(balance<600){
    console.log("less than 600");
}
else if(balance<900){
    console.log("less than 900");
}
else{
    console.log("less than 3000");
}


const userLoggedIn=true;
const debitCard=false;
if (userLoggedIn && debitCard) {
    console.log("then user do the shooping");
}
else{
      console.log("do not");
}
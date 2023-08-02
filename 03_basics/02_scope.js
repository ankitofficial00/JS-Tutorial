
// var c=600;
let a=500;
if(true){
    let a=10;
    console.log("Inner : ",a);
    const b=20;
    // console.log(c);
    // var c=30;
}
console.log(a);
// console.log(b);
// console.log(c);


function one(){
    let username="ankit";
    function two(){
        let website="youtube";
        console.log(username);
    }
    // console.log(website);
    two();
};

one();


if(true){
    let username="ankit";
    if(username==="ankit"){
        let website="youtube";
        console.log(username+ " " +website);
    }
    // console.log(wesite);
}
// console.log(username);




console.log(addOne(7));
function addOne(num){
    return num+1;
}


console.log(addTwo(2));
const addTwo=function(num){
    return num+2;
}

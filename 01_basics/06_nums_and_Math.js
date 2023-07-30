// ************Number ************

const value=89;
// console.log(value);
const accountPrice=78000;
// console.log(accountPrice);
// console.log("number");

const balance=new Number(120000.6689);
// console.log(balance);

// const newData=balance.toString();
// console.log(newData,typeof newData);
const newData=balance.toFixed(1);
// console.log(newData);

const otherNumber=1123.6789;
// console.log(otherNumber.toPrecision(4).length);

const hundred=1000000;
// console.log(hundred.toLocaleString('en-IN'));
 
// ************ Maths ********

// console.log(Math);

// console.log(Math.abs(-78));
// console.log(Math.random());
// console.log(Math.round(5.09));
// console.log(Math.ceil(3.02));
// console.log(Math.floor(6.08));

// // console.log(Math.sqrt(46));
// console.log(Math.pow(4,3));
// console.log(Math.min(4,7,8,3));
// console.log(Math.max(4,7,8,3));


console.log(Math.floor((Math.random()*100) + 1));


const min=10;
const max=20;

console.log(Math.floor((Math.random() * (max-min+1))) + min);
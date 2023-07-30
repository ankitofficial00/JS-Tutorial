// console.log(Date());

// date 
let myDate=new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toString());
// console.log(myDate.toUTCString());

// let createdDate=new Date(2023,11,0,13,6,18);
// let createdDate=new Date("2023-4-20");
let createdDate=new Date("12-17-2023");
// console.log(createdDate.toLocaleString());

let timestamp= Date.now();
// console.log(timestamp);
// console.log(createdDate.getTime());

// we can convert into seconds 
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
// console.log(newDate.getFullYear());

// console.log(`my new date is ${myDate.getDate()} and year is ${myDate.getFullYear()}`);

console.log(myDate.toLocaleString('default',{
   hour24:true,
   month:"long"

}));
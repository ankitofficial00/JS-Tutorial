// constructor --->singleton
// object literal --->not a singleton

// Object.create // it is constructor method to create an object 

let id=Symbol("id");
console.log(id);
console.log(id.description);


const user={
    name:'hitesh',
    "full name":"hitesh coudhary",
    age:23,
    location:"jaipur",
    email:"support@google.com",
    isLoggedIn:true,
    lastLoginDetails:["monday","tuesday","friday","sunday"],
    [id]:1243,

};

console.log(id);
// console.log(user);


// console.log(user.location);
// console.log(user["lastLoginDetails"]);

// console.log(user["full name"]);

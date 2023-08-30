// object literal

const user={
    username:"ankit",
    loginCount:7,
    sigedIn:true,

    getUserDetails:function(){
        // console.log("got user details from database");
        console.log(this);
    }
}

// console.log(user);
// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);


// constructor function 
// const promise = new promise();
// const date= new Date();

function User(username,loginCount){
    this.username=username;
    this.loginCount=loginCount
    this.greeting= function(){
        console.log(`welcome to ${this.username}`);
    }
    return this 
}

const userOne=  new User("ankit",8);
const userTwo= new User("sumit",14)
// console.log(userOne.greeting());
// console.log(userTwo);
console.log(userOne.constructor);
console.log(userTwo.constructor)
console.log(userTwo instanceof Object);
// steps for working the new keyword 

// 1 empty object(new)
// 2 new keyword calls the constructor function (it creates the instances)
// 3 this keyword help to inject the arugumnets to the variables 
// 4 we will get the results 

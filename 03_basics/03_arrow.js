const user={
    name:"hitesh",
    price:888,
    welcome:function(){
        console.log(`${this.name} welcome to the webpage`);
        console.log(this);
    }
};

// user.welcome();
// user.name="ankit";
// user.welcome();

// console.log(this)

// function chai(){
//     let username="ankit"
//     console.log(this.username);
// };
// chai();


// const chai=function(){
//     let username="ankit";
//     console.log(this.username);
// };
// chai();


// const chai=()=>{
//     let username="ankit";
//     console.log(this);
// };
// chai();


const addTwo=(num1,num2)=> ({username:"hello"});
console.log(addTwo(2,8));
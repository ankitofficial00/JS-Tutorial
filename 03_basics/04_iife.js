// Immediately Invoked function expression (IIFE)

// (function chai(){
    // named iife
//     console.log("db connected");
// })();
// (chai=(name)=>{
//     console.log("db connected");
//     console.log(`my name is ${name}`);
// })("ankit");


(function chai(){
    console.log("our chai and our code is ready for exceution ");
})();

(chai=()=>{
    console.log("chai ur code is ready");
})()
// for loops

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if(element==6){
//      console.log("6 th number");
//     }
//     console.log(element);
// }

for (let i = 0; i <= 10; i++) {
    console.log(`inner loop : ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`outer loop ${j} and inner loop is ${i}`);
    }
    
}
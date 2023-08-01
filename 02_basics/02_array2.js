const arr1=["ankit","punnet","rahi"];
const arr2=["bhawana","khushi"]
// arr1.push(arr2);
// console.log(arr1[3][0]);
console.log([...arr1 , ...arr2,"monika"]);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_array=another_array.flat(Infinity);
console.log(real_array);

let score1=1000;
let score2=2000;
let score3=3000;
let obj3={
    name:'ankit',
    age:22
}
let obj1={
    name:'ankit',
    age:22
};
let obj2={
    name:'aniet',
    age:22
};
console.log(Array.of(score1,score2,score3));
console.log(Array.of(obj1,obj2,obj3));

console.log(Array.isArray(new Array(4,6)))

console.log(Array.from("ankit"))
// console.log(Array.from({name:"ankit"},this.ankit)); doubt and intersting 
// in this we pass the key or value generating the array from the given object 

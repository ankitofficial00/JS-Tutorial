let name="Ankit";
let repoCount=12;
// console.log(name+repoCount + " value");

// string interpetention method or template literal
console.log(`my name is ${name.toUpperCase()} and my repo count is ${repoCount.toString().length}`);

let gameName=new String('carracing');
console.log(gameName);
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);
console.log(gameName[5]);
console.log(gameName[6]);
console.log(gameName[7]);
console.log(gameName[8]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
// substring
let newString= gameName.substring(0,3);
console.log(newString);

// slice 
let newStringBySlice=gameName.slice(-8,-4);
console.log(newStringBySlice);


// trim()
let ekName="    ankit  ";

console.log(ekName.trimEnd());

// replace

let newData=ekName.replace('a','Y');
console.log(newData);

let updatedData=ekName.replace("ankit","puneet");
console.log(updatedData);

console.log(gameName.includes("car"));

let myName="ANKIT-YADAV-RAO";
let newName=myName.split('-');
console.log(newName);

clg


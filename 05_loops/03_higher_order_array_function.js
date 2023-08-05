// for of loop

const arr=[1,2,3,4,5];
// for (const key of arr) {
//     console.log(key);
// }

// const name="ankit";
// for (const iterator of name) {
//     console.log(iterator);
// }
// for (const key in arr) {
//       console.log(arr[key]);
// }

// maps
const maps=new Map();
maps.set('in','india');
maps.set('usa','ubited state of america');
maps.set('in','india');

maps.set('fr','france');
maps.set("cn","canaada");
console.log(maps);

for (const [keys,value] of maps) {
    console.log(keys,':-',value);
}

const data={
    name:"ankit",
    age:22,
}

// for (const value of Object.values(data)) {
//     console.log(value);
// }

for(let key in data){
    console.log(data[key])
}
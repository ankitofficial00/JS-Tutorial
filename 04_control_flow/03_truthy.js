const userEmail=[];
if(userEmail){
    console.log("got an email");
}else{
    console.log("not not get an email");
}

// falsey value 
// false,null,undefined,NaN,0,-0,bigint 0n,""


// truthy value 

// "0" "false",{},[]," " ,function(){}

if(userEmail.length==0){
    console.log("array is empty");
}

let newObject={};
if(Object.keys(newObject).length==0){
    console.log("object is empty");
}


// Nullish Coalescing operator --> null and undefined(??)

let val1;
// val1=5??89
// val1=null ?? 56;
// val1=undefined ??23;
// val1=null ?? undefined
val1=null ?? 56??45;
console.log(val1)


// ternery opertator 

const price=60;
price<30?console.log("more than 30"):console.log("less than 60");
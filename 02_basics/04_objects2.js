// console.log("with the constructor we create singeton object");
// const tinderUser={};
const tinderUser=new Object();
tinderUser.id="123abc";
tinderUser.userName="gen345";
tinderUser.gender="male";
tinderUser.age=22;
tinderUser.relationship="looking for friend";
tinderUser.isSatus="online";
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const regularUser={
    FullName:{
        UserFullName:{
            FirstName:"ankit",
            LastName:"yadav"
        },
    },
    age:23,
    gender:{
         UserGender:{
            Male:true,
            Female:false,
         },
    },
};
// console.log(regularUser.FullName.UserFullName.FirstName);
// console.log(regularUser.gender.UserGender.Female);


const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
// const obj3={obj1,obj2};
// const obj3={...obj1,...obj2}
const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);


const data=[
    {
        id:233455566565,
        parcelNo:55666,
        material:"household"
    },
    {
        id:233455566775,
        parcelNo:55322,
        material:"floor"
    },
    {
        id:23345346565,
        parcelNo:32666,
        material:"terrace"
    },
    {
        id:2334555668787565,
        parcelNo:5766,
        material:"furniture"
    },

];
console.log(data[1].material);
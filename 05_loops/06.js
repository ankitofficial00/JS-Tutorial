// let language=["hindi","english","germany","french"];
// const values=language.forEach((item) => {
//      console.log(item);
//      return item;
// });
// console.log(values);

// map

const number = [1, 3, 5, 7, 9];
// const myNumber=number.map((num)=>{
//      return num*3;
// });
// console.log(myNumber);

// filter
// const myNumber=number.filter((item)=>{
//      return item>6
// });
// console.log(myNumber);

// const myNumber=[];
// number.forEach((num)=>{
//     if(num>4){
//           myNumber.push(num);
//     }
// });
// console.log(myNumber);

// reduce
// const myNumber=number.reduce((num,result)=>{
//        return result+num;
// },0);

// console.log(myNumber);

const books = [
  { title: "Book One", genre: "Friction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Friction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Friction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Friction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Friction", publish: 1981, edition: 1989 },
];

const userBooks=books.filter((book)=>{
   return book.genre==='Science'
});
console.log(userBooks);
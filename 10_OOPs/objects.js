// console.log(Math.PI);
Math.PI = 4;
// console.log(Math.PI);

const decsriptor = Object.getOwnPropertyDescriptor(Math, "PI");

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log("chai is ordered");
  },
};

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

function multiplyByFive(num) {
    return num * 5;
  }
  // function is an also an object
  multiplyByFive.power = 5;
  
  console.log(multiplyByFive(6));
  console.log(multiplyByFive.prototype);
  
  function createUser(username, score) {
    this.username = username;
    this.score = score;
  }
  
  createUser.prototype.increment = function () {
    this.score++;
  };
  
  createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
  };
  const coffee = new createUser("coffee", 450);
  const chai = new createUser("chai", 25);
  
  coffee.printMe();
  
  let myName = "ankit    ";
  console.log(myName.length);
  
  String.prototype.trueLength = function () {
  //   console.log(this);
      console.log(`length is ${this.trim().length}`);
  };
  console.log(myName.trueLength());
  
  "hitesh".trueLength();
  "chaiAurCode".trueLength();
  let myHero = ["thor", "spiderMan"];
  
  let Hero = {
    thor: "hammer",
    spiderMan: "sling",
  
    getSpiderPower: function () {
      console.log(`spidy power is ${this.spiderMan}`);
    },
  };
  
  Object.prototype.hitesh = function () {
    console.log("hitesh is present in all objects ");
  };
  // Hero.hitesh();
  // myHero.hitesh();
  // myName.hitesh();
  
  Array.prototype.heyHitesh = function () {
    console.log("hello to hitesh");
  };
  
  // myHero.heyHitesh();
  // Hero.heyHitesh();
  
  // prototype inheritance
  
  const user = {
    name: "chai",
    email: "chaiurcode.com",
  };
  
  const Teacher = {
    makevideo: true,
  };
  
  const TeachingSupport = {
    makeAssignment: " js assignment",
    fullTime: true,
    __proto__: Teacher,
  };
  
  Object.setPrototypeOf(Teacher, user);
  
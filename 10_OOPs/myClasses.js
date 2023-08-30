class user {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
    encryptPassword() {
      return `${this.password}abc`;
    }
    changeUsername() {
      return `${this.username.toUpperCase()}`;
    }
  }
  
  const chai = new user("chai", "chai.google.com", 12345);
  console.log(chai.encryptPassword());
  console.log(chai.changeUsername());
  
  /// inheritance
  
  class User {
    constructor(username) {
      this.username = username;
    }
    loginMe() {
      console.log(`${this.username} login `);
    }
  }
  
  class Teacher extends User {
    constructor(username, email, pass) {
      super(username);
      this.email = email;
      this.pass = pass;
    }
    addCourse() {
      console.log(` a new course added by ${this.username}`);
    }
  }
  
  const masalaChai = new Teacher("chai", "google.com", "12345");
  console.log(masalaChai);
  masalaChai.addCourse();
  masalaChai.loginMe();
  
  const tea = new User("tea");
  tea.loginMe();
  
  
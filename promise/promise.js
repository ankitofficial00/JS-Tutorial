// const promiseOne = new Promise((resolve, reject) => {
//   // do an async task
//   // DB calls ,network calls , cryptograpy,setTimeout
//   setTimeout(() => {
//     console.log("async task is completed");
//     resolve("done");
//   }),
//     2000;
// });

// promiseOne.then((result) => {
//   console.log(result);
//   console.log("promise consumed");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("our promises is created");
//     resolve(4566);
//   }),
//     4000;
// }).then((r) => {
//   console.log(r);
//   console.log("promises");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       username: "chai aur code",
//       author: "hitesh choudhary",
//     });
//   });
// });

// promiseThree.then((value) => {
//   console.log(value);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "hitesh", password: "123" });
//     } else {
//       //   reject("Error : something went wrong");
//       reject(new Error("something not gone right"));
//     }
//   }),
//     5000;
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise is either resolved or rejected "); // it is always exceuted at any cost
//   });

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error) {
        resolve({ username: "javascript", password: "123" });
      } else {
        reject("error  : js went wrong");
      }
    }),
      2000;
  });
  
  async function consumePromiseFive() {
    try {
      const response = await promiseFive; // but due to this method error is not handled properly
  
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  consumePromiseFive();
  
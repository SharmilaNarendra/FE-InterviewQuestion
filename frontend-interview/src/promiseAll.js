//Polyfill for promise all
// Promise.all([p1,p2,p3]).then([val1,val2,val3]).catch((err)=>{}) - we have to build this logic from scratch

const getPromise = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

const taskArray = [getPromise(1000), getPromise(2000), getPromise(3000)];

const promisepolyfill = (taskArray) => {
  return new Promise((resolve, reject) => {
    const output = [];
    taskArray.forEach((promise, index) => {
      promise
        .then((data) => {
          output[index] = data;
          if (index === taskArray.length - 1) {
            resolve(output);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

promisepolyfill(taskArray)
  .then((data) => {
    console.log("All Promises are resolved", data);
  })
  .catch((err) => {
    console.log("Not all Promises are resolved", err);
  });

//Polyfill for promise.allSettled
//promise.allSettled([p1,p2,p3]).then([val1,err,val2]).catch(()=>{})

const promise1 = new Promise((resolve, reject) => resolve(2));
const promise2 = new Promise((resolve, reject) => reject(1));
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});

const promiseAllSettled = (taskArray) => {
  const output = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    taskArray.forEach((promise) => {
      promise
        .then((data) => {
          output.push({
            status: "fulfilled",
            value: data,
          });
        })
        .catch((err) => {
          output.push({
            status: "pending",
            value: err,
          });
        })
        .finally(() => {
          counter++;
          if (counter === taskArray.length) {
            resolve(output);
          }
        });
    });
  });
};

promiseAllSettled([promise1,promise2,promise3]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(data);
})
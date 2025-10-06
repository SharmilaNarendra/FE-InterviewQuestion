//Polyfill for promise.any()
//promise.any([p1,p2,p3]).any(val1).catch((err)=>console.log('aggregate error'))

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1000);
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2000);
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(4000);
  }, 4000);
});

const polyfillAny = (taskArray) => {
  return new Promise((resolve, reject) => {
    const outputErr = [];
    taskArray.forEach((promise, index) => {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          outputErr[index] = err;
          if (index === taskArray.length-1) {
            reject(new AggregateError(outputErr, 'All promises were rejected'));
          }
        });
    });
  });
};

polyfillAny([promise1, promise2, promise3]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

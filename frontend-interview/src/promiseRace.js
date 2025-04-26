//Polyfill for promise.race()
//promise.race([p1,p2,p3]).race([val1/err])

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1000);
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

  const polyfillRace = (taskArray) => {
    return new Promise((resolve, reject) => {
      const outputErr = [];
      taskArray.forEach((promise, index) => {
        promise
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  };
  
  polyfillRace([promise1, promise2, promise3]).then((data)=>{
      console.log(data);
  }).catch((err)=>{
      console.log(err);
  })
  
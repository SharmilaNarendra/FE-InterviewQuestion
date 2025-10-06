const arr = [1, 2, 3, 4, 5, 6];
arr?.forEach((i) => {
  //console.log(i);
});

Array.prototype.myForEach = function (cb) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    cb(this[i]); // it just sends the value for evry iteration
  }
};

arr?.myForEach((i) => {
  console.log(i);
});

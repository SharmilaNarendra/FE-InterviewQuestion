const arr = [1,2,3,4,5,6]
arr?.map((i)=>{
  //console.log(i);
})


Array.prototype.myMap = function (cb){
    const res=[]; // outpoy of map is an array , not of foreach 
    for (let i = 0;i< this.length;i++){
        res.push(cb(this[i]));
    }
   return res;
}
arr?.myMap((i)=>{
    console.log(i);
  })
  
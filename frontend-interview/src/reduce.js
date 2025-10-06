let arr = [1,2,3,4,5,6]
let res = arr?.reduce((acc, cur)=>{
  return acc+cur;
},0)

console.log(res);

Array.prototype.myReduce = function (cb, intialValue){
    let acc = intialValue; 
    for (let i = 0;i< this.length;i++){
       acc= acc? cb(acc,this[i]) : this[i]
    }
   return acc;
}
arr?.myReduce((acc, cur)=>{
    return acc+cur;
  },0)
const a=require('./app') //import variable from another file
console.log(a,a.z())
const arr=[2,5,8,6,3];
let r=arr.filter((item)=>{
    return item;
})
console.log(r)
//var add=(a,b)=>a+b;
//var result=add(34,6)
//console.log(result) arrow function
/*
(function(){
    console.log("suraj")
})();

function callback() //callback function
{
    console.log("now adding is successfully")
}
const add=function(a,b,callback){
    var result = a+b;
    console.log("result:" +result) // main function work complete
    callback()
}
add(3,4,callback)
*/
/*
var fs=require('fs')
var os=require('os')
var user=os.userInfo();
console.log(user);
console.log(user.username)
fs.appendFile('greeting.txt','hello '+user.username +'! \n',()=>
{
    console.log('file is created')
})
*/
/*
const notes=require('./notes.js')
var _=require('lodash')
console.log('server file is loaded')
var age=notes.age
var result=notes.addnumber(age+18,10)
console.log(age)
console.log(result)
*/
/*
var data=['person',1,2,'person',3,2,1]
var filter=_.uniq(data) // uniq function is in lodash
console.log(filter)
console.log(_.isString('suraj'))
console.log(_.isString(true)) // true is boolean type so it give false
*/
const objectToConvert={
    name:"suraj",
    age:23
}
const jsonString='{"name": "john" , "age":30,"city":"New York"}'
const jsonObject=JSON.parse(jsonString) // json into object
console.log(jsonObject)
console.log(jsonObject.name) 
const json=JSON.stringify(objectToConvert) // object into json
console.log(json)
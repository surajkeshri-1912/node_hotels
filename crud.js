const fs=require('fs')
const path=require('path')
const dirpath=path.join(__dirname,'files')
const filepath=`${dirpath}/mango.txt`
// fs.writeFileSync(filepath,'this is simple text file of mango') // create file
/*fs.readFile(filepath,'utf8',(err,item)=>{
    console.log(item) // read file
}
) */ 
/* fs.appendFile(filepath,'and file name is mango.txt',(err)=>{
    if(!err) console.log("file is updated") // file updation
}
)
*/
/*
fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
    if (!err)
    console.log("file is renamed as fruit") // file renaming
}
)
*/
fs.unlinkSync(`${dirpath}/fruit.txt`) // file deletion


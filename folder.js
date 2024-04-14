const fs=require('fs')
const path=require('path')
const dirpath=path.join(__dirname,'files')
console.log(dirpath)
/*for(i=0;i<5;i++)
{
    fs.writeFileSync(dirpath+"/second"+i+".txt","a simple test file")
}
*/
fs.readdir(dirpath,(err,files)=>{
    //console.log(first)
    files.forEach((item)=>{
        console.log("file name is ",item)
    }

    )

}
)

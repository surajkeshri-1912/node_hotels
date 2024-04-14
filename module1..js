const fs=require('fs'); // import file system
fs.writeFileSync("hello2.txt","this file is created using fs module which is not global")
// we can also use as :: const fs=require('fs').writeFileSync;  fs("hello2.txt","this is new file")
console.log(__dirname); // it gives directory of current file
console.log(__filename); //it gives name of current file
fs.writeFileSync("code.txt","hii this new file")
